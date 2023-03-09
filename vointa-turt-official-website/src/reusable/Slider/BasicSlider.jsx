import React from "react";
import background1 from "../../assets/background1.jpg";
import background2 from "../../assets/background2.jpg";
import background3 from "../../assets/background3.jpg";
import background4 from "../../assets/background4.jpg"
import HeroSlider, { Slide } from "hero-slider";

export const BasicSlider = () => {
  return (
    <HeroSlider
      autoplay={true}
    //   slidingAnimation="up_to_down"
    //   orientation="vertical"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.33)",
      }}
      controller={{
        initialSlide: 1,
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 2000,
        height: "100%",
      }}
    >
      <Slide
        background={{
          backgroundImageSrc: background1,
          backgroundAttachment: "fixed",
        }}
      ></Slide>
      <Slide
        background={{
          backgroundImageSrc: background2,
          backgroundAttachment: "fixed",
        }}
      ></Slide>
      <Slide
        background={{
          backgroundImageSrc: background3,
          backgroundAttachment: "fixed",
        }}
      ></Slide>
      <Slide
        background={{
          backgroundImageSrc: background4,
          backgroundAttachment: "fixed",
        }}
      ></Slide>
    </HeroSlider>
  );
};
