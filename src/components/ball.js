import React from "react";
import styles from "./ball.module.css";

const Ball = () => {
  return (
    <>
      <section className={styles.stage}>
        <figure className={styles.ball}>
          <span className={styles.shadow} />
        </figure>
      </section>
      <figure className={styles.glass} />
      <figure className={styles.triangle} />
    </>
  );
};

export default Ball;
