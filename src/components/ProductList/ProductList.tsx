// rfc rafc

import { useEffect, useState } from "react";
import type { Product } from "../../types/types";
import { Link } from "react-router-dom";
import styles from "./ProductList.module.css";

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const productsRes = await res.json();
    setProducts(productsRes);
  }

  return (
    <div className={styles.container}>
      <h2>Products list</h2>
      <ul className={styles.list}>
        {products.map((p) => (
          // <li key={"product" + p.id}>
          //   <h3>{p.title}</h3>
          //   <img src={p.images[0]} alt="product" />
          //   <span>{p.price} $</span>
          <li key={"product" + p.id} className={styles.item}>
          <h3 className={styles.title}>{p.title}</h3>
          <img src={p.images[0]} alt="product" className={styles.image} />
          <p className={styles.description}>{p.description}</p>
          <span className={styles.price}>{p.price} $</span>
            <Link to={`/products/${p.id}`}>To product</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
