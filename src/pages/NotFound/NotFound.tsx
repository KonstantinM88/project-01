import { useEffect, useState } from "react";
import styles from "./NotFound.module.css";

export default function NotFound() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetchCat();
  }, []);

  async function fetchCat() {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const obj = await res.json();
    setUrl(obj[0].url);
  }

  return (
    <div className={styles.container}>
      <h2>Page not found</h2>
      <img src={url} alt="cat" />
    </div>
  );
}
