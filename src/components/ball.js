import React, { useState, useEffect } from "react";
import styles from "./ball.module.css";
import eightball from "../8ball.png";
import { useWindowDimensions } from "./windowdimensions";
import ball1 from "../crystal1.png";
import ball2 from "../crystal2.png";
import ball3 from "../crystal3.png";
import ball4 from "../crystal4.png";

const Ball = () => {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  const [shake, setShake] = useState(false);
  const [indx, setIndx] = useState(0);
  const texts = ["Test Text 1", "Test Text 2", "Test Text 3", "Test Text 4"];
  const max_size = 600;
  const ball_size = Math.min(max_size, Math.min(height, width));
  const font_size = 16 * (ball_size / max_size);
  const images = [ball1, ball2, ball3, ball4];

  return (
    <>
      <div
        className={`m-auto ${styles.container} ${shake ? styles.move : ""}`}
        onClick={() => {
          setShake(true);
          setTimeout(() => {
            setShake(false);
            setIndx((indx + 1) % texts.length);
          }, 800);
        }}
      >
        <img
          src={images[indx]}
          width={ball_size}
          height={ball_size}
          //   style={{ borderRadius: "100%" }}
        />
        {/* <span
          className={`${styles.text} ${shake ? styles.hide : ""}`}
          style={{
            fontSize: `${font_size}px`,
            top: `calc(50% - ${40 * (ball_size / max_size)}px)`,
          }}
        >
          {texts[indx]}
        </span> */}
      </div>
    </>
  );
};

export default Ball;
