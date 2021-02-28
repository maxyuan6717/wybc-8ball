import React, { useState, useEffect } from "react";
import styles from "./ball.module.css";
import ball0 from "../assets/ball0.png";
import ball1 from "../assets/ball1.png";
import ball2 from "../assets/ball2.png";
import ball3 from "../assets/ball3.png";
import ball4 from "../assets/ball4.png";
import pdf from "../assets/magazine.pdf";

const Ball = () => {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  const [shake, setShake] = useState(false);
  const [indx, setIndx] = useState(0);
  const max_size = 550;
  const ball_size = Math.min(max_size, Math.min(height, width));
  const images = [ball0, ball1, ball2, ball3, ball4];
  const pdf_url =
    "https://view.publitas.com/dc9e368e-f7d1-4b07-9d86-67fb50b35376/rdbnpng-27-oracle/page/1";

  return (
    <>
      <div
        className={`m-auto ${styles.container} ${shake ? styles.move : ""}`}
        onClick={() => {
          setShake(true);
          setTimeout(() => {
            setShake(false);
            setIndx((indx + 1) % images.length);
          }, 800);
          if (indx === 3) {
            setTimeout(() => {
              window.location.href = pdf_url;
            }, 2000);
          }
        }}
        style={{ borderRadius: "100%" }}
      >
        <img
          src={images[indx]}
          width={ball_size}
          height={ball_size}
          style={{ borderRadius: "100%", margin: "10px" }}
        />
      </div>
    </>
  );
};

export default Ball;
