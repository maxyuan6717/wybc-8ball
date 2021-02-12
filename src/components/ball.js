import React, { useState } from "react";
import styles from "./ball.module.css";
import eightball from "../8ball.png";
import { useWindowDimensions } from "./windowdimensions";
import { useEffect } from "react";

const Ball = () => {
  const { height, width } = useWindowDimensions();
  const [shake, setShake] = useState(false);
  const [indx, setIndx] = useState(0);
  const texts = ["Test Text 1", "Test Text 2", "Test Text 3", "Test Text 4"];
  const ball_size = Math.min(600, Math.min(height, width));
  const font_size = 16 * (ball_size / 600);

  return (
    <>
      <div
        className={`m-auto ${styles.container} ${shake ? styles.move : ""}`}
        onClick={() => {
          setShake(true);
          setTimeout(() => {
            setShake(false);
            setIndx((indx + 1) % texts.length);
          }, 1000);
        }}
      >
        <img src={eightball} width={ball_size} height={ball_size} />
        <span className={styles.text} style={{ fontSize: `${font_size}px` }}>
          {texts[indx]}
        </span>
      </div>
    </>
  );
};

export default Ball;
