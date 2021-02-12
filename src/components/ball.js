import React, { useState } from "react";
import styles from "./ball.module.css";

const Ball = () => {
  const [shake, setShake] = useState(false);
  return (
    <>
      {/* <section className={styles.stage}>
        <figure className={styles.ball}>
          <span className={styles.shadow} />
        </figure>
      </section> */}
      <div
        className={"mx-auto d-flex " + (shake ? styles.move : "")}
        onClick={() => {
          setShake(true);
          setTimeout(() => {
            setShake(false);
          }, 1000);
        }}
      >
        <figure className={styles.circle} />
        <figure className={styles.glass} />
        <figure className={styles.triangle} />
        <span className={styles.text}>Testing text</span>
      </div>
    </>
  );
};

export default Ball;
