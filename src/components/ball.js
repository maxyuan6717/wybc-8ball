import React, { useState } from "react";
import styles from "./ball.module.css";
import eightball from "../8ball.png";
import { useWindowDimensions } from "./windowdimensions";
import { useEffect } from "react";

const Ball = () => {
  //   const { height, width } = useWindowDimensions();
  const height = window.innerHeight;
  const width = window.innerWidth;
  const [shake, setShake] = useState(false);
  const [indx, setIndx] = useState(0);
  const texts = ["Test Text 1", "Test Text 2", "Test Text 3", "Test Text 4"];
  const max_size = 700;
  const ball_size = Math.min(max_size, Math.min(height, width));
  const font_size = 16 * (ball_size / max_size);

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
        <img
          src={eightball}
          width={ball_size}
          height={ball_size}
          style={{ borderRadius: "100%" }}
        />
        <span
          className={`${styles.text} ${shake ? styles.hide : ""}`}
          style={{
            fontSize: `${font_size}px`,
            top: `calc(50% - ${45 * (ball_size / max_size)}px)`,
          }}
        >
          {texts[indx]}
        </span>
      </div>
    </>
  );
};

export default Ball;
