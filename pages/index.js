import { useState } from "react";
import styles from "./styles.module.css";

function Home() {
  const [message, setMessage] = useState("Clique no botão para algo incrível!");

  const handleClick = () => {
    setMessage("Bem-vindo ao futuro com React e Next.js! 🚀");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Explorando o Infinito</h1>
      <p className={styles.message}>{message}</p>
      <button className={styles.button} onClick={handleClick}>
        Transformar
      </button>
    </div>
  );
}

export default Home;

function teste() {
  console.log("teste123");
}
