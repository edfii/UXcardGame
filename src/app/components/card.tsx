import { theories } from "../theories"
import styles from "../page.module.css";

export default function Card({ counter }: { counter: number }) {

    return (
      <div className={styles.card}>
        <h2>{theories[counter].titel}</h2>
        <hr/>
        <p>{theories[counter].description}</p>
        <img src={`img/${theories[counter].img}`} alt={theories[counter].titel}/>
        <p>{theories[counter].example}</p>
      </div>
    );
  }
  