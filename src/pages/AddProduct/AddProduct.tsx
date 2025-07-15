import { useState } from "react";
import type { NewProduct } from "../../types/types";
import styles from "./AddProduct.module.css"; 

export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct: NewProduct = {
      title,
      price: Number(price),
      description,
      categoryId: 1,
      images: [image],
    };
    console.log(newProduct);
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      if (res.ok) {
        setMessage("Product created successfully");
        setTitle("");
        setPrice("");
        setDescription("");
        setImage("");
      } else {
        setMessage("Failed to create product");
      }
    } catch {
      setMessage("Failed to create product");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Add Product</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Title: </label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Price: </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Description: </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Image URL: </label>
        <input value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}