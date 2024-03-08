"use client"
import styles from "./page.module.css";
import Card from "./components/card";
import React from "react";
import { theories } from "./theories"

export default function Home() {

  const [counter, setCounter] = React.useState(0);
  
 
  function decreaseCounter() {
    if (counter === 0) {
      setCounter(theories.length - 1)
    } else {
      setCounter(counter - 1);
    }
  }

  function increaseCounter() {
    if (counter === theories.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  }

  return (
    <main className={styles.main}>
      <h1>UX Theory Cards</h1>
      <div className={styles.box}>
      <div onClick={decreaseCounter}>
        <img className={styles.arrowleft} src="img/arrow.png" alt="arrow" />
      </div>
      <Card counter={counter}/>
      <div onClick={increaseCounter}>
        <img src="img/arrow.png" alt="arrow" />
      </div>
      </div>
    </main>
  );
  }
