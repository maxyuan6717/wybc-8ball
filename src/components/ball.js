import React, { useState } from "react";
import styles from "./ball.module.css";

const Ball = () => {
  const [shake, setShake] = useState(false);
  const [indx, setIndx] = useState(0);
  const texts = ["Test Text 1", "Test Text 2", "Test Text 3", "Test Text 4"];
  return (
    <>
      {/* <section className={styles.stage}>
        <figure className={styles.ball}>
          <span className={styles.shadow} />
        </figure>
      </section> */}
      <div
        className={`m-auto d-flex ${styles.container} ${
          shake ? styles.move : ""
        }`}
        onClick={() => {
          setShake(true);
          setTimeout(() => {
            setShake(false);
            setIndx(indx + 1);
          }, 1000);
        }}
      >
        <figure className={styles.circle} />
        <figure className={styles.glass} />
        <figure className={styles.triangle} />
        <span className={styles.text}>{texts[indx]}</span>
      </div>
    </>
  );
};

export default Ball;
