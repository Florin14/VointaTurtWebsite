import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./NewSlider.scss";
const Slide = ({ item }) => {
  const styles = {
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    // maxHeight: 180,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  };

  const imgStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "4px",
    objectFit: "contain",
    backgroundImage: "radial-gradient(circle, #272727, #1f1f1f, #171717, #0e0e0e, #000000)",
  };
  return (
    <div className="slide" style={styles}>
      <img style={imgStyles} src={item.img} width={"100%"} height={"100%"} />
      <div className="slide_content">
        {/* <h1>{item.title}</h1> */}
        {/* <button>{item.cta}</button> */}
      </div>
    </div>
  );
};

const NewSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const handlseDotClick = (index) => {
    setCurrentIndex(index);
    if (index === 0) {
      setTranslateValue(0);
    } else {
      let t = index * 100;
      setTranslateValue(-t);
    }
  };

  useEffect(() => {
    let slider = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setTranslateValue(-(currentIndex + 1) * 100);
      } else {
        setCurrentIndex(0);
        setTranslateValue(0);
      }
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);
  return (
    <div className="slider">
      <div
        className="slider_wrapper"
        style={{
          transform: `translateX(${translateValue}%)`,
          transition: "transform ease-out 0.4s",
        }}
      >
        {slides.map((item) => {
          return <Slide key={item.id} item={item} />;
        })}
      </div>
      <div className="dots_wrapper">
        {slides.map((item, index) => {
          return (
            <span
              key={item.id}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => {
                handlseDotClick(index);
              }}
            >
              &#8226;
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default NewSlider;
