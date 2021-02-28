import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import styles from "./issue.module.css";
import { images } from "./images";
import pdf from "../assets/magazine.pdf";

const Issue = () => {
  const numPages = 28;
  const [pageNumber, setPageNumber] = useState(1);
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [isMobile, setIsMobile] = useState();
  const [step, setStep] = useState();
  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setIsMobile(width < 1.3 * height);
  }, [width, height]);

  useEffect(() => {
    setStep(isMobile ? 1 : 2);
  }, [isMobile]);

  const arrow_size = 50;
  return (
    <div className={styles.container}>
      <div className="m-auto">
        {/* <div
          className={`${styles.doc_container}`}
          style={{ maxWidth: `${width * 0.9}px` }}
        >
          <Row className="mx-auto flex-nowrap" style={{ overflow: "scroll" }}>
            {images.map((image, indx) => (
              <img src={image} height={`${height * 0.85}px`} />
            ))}
          </Row>
        </div> */}
        <Row className="mx-auto justify-content-center mb-1">
          <a href={pdf} download>
            Download
            <span className="my-auto ml-2">
              <BsDownload size={14} style={{ display: "inline-block" }} />
            </span>
          </a>
        </Row>
        <Row className="mx-auto">
          <IoIosArrowBack
            className={`my-auto ${styles.arrow} ${
              pageNumber === 1 ? styles.disabled : ""
            }`}
            onClick={() => {
              console.log("back");
              if (pageNumber > 1) setPageNumber(pageNumber - step);
            }}
            size={arrow_size}
          />

          <div>
            <Row className="mx-auto">
              <div className={`${styles.doc_container}`}>
                {pageNumber !== 1 && !isMobile && (
                  <img
                    src={images[pageNumber - 2]}
                    height={!isMobile ? `${height * 0.85}px` : null}
                    width={
                      !isMobile ? null : `${width * 0.9 - arrow_size * 2}px`
                    }
                  />
                )}
                {pageNumber <= numPages && (
                  <img
                    src={images[pageNumber - 1]}
                    height={!isMobile ? `${height * 0.85}px` : null}
                    width={
                      !isMobile ? null : `${width * 0.9 - arrow_size * 2}px`
                    }
                  />
                )}
              </div>
            </Row>
          </div>

          <IoIosArrowForward
            className={`my-auto ${styles.arrow} ${
              pageNumber >= numPages ? styles.disabled : ""
            }`}
            onClick={() => {
              if (pageNumber < numPages) setPageNumber(pageNumber + step);
            }}
            size={arrow_size}
          />
        </Row>
        <Row className="mx-auto justify-content-center mt-1">
          {`
          ${pageNumber !== 1 && !isMobile ? pageNumber - 1 : ""}${
            pageNumber >= 2 && pageNumber <= numPages && !isMobile ? "-" : ""
          }${pageNumber <= numPages ? pageNumber : ""} / ${numPages}`}
        </Row>
      </div>
    </div>
  );
};

export default Issue;
