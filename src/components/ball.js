import React, { useState } from "react";
import styles from "./ball.module.css";
import eightball from "../8ball.png";

const Ball = () => {
  const [shake, setShake] = useState(false);
  const [indx, setIndx] = useState(0);
  const texts = ["Test Text 1", "Test Text 2", "Test Text 3", "Test Text 4"];
  const size = 600;
  return (
    <>
      <div
        className={`m-auto d-flex ${styles.container} ${
          shake ? styles.move : ""
        }`}
        onClick={() => {
          setShake(true);
          setTimeout(() => {
            setShake(false);
            setIndx((indx + 1) % texts.length);
          }, 1000);
        }}
      >
        {/* <section className={styles.stage}>
          <figure className={styles.ball}>
            <span className={styles.shadow} />
            <span className={styles.eight} />
          </figure>
    </section> */}
        {/* <figure className={styles.circle} /> */}
        {/* <figure className={styles.glass} />
        <figure className={styles.triangle} /> */}
        <img src={eightball} width={size} height={size} />
        <span className={styles.text}>{texts[indx]}</span>
      </div>
    </>
  );
};

export default Ball;
