import "./LandingPage.scss";
import React, { useEffect, useRef, useState } from "react";
import { MatchCard } from "../../reusable/Card/MatchCard";
import { NextMatchCard } from "../../reusable/Card/NextMatchCard";
import Title from "../../reusable/Title/Title";
import { PlayerCard } from "../../reusable/Card/PlayerCard";
import { NavLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import background1 from "../../assets/background1.jpg";
import background2 from "../../assets/background2.jpg";
import background3 from "../../assets/background3.jpg";
import background4 from "../../assets/background4.jpg";
import { Grid, ImageList, ImageListItem } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { BasicSlider } from "../../reusable/Slider/BasicSlider";
import NewsCard from "../../reusable/Card/NewsCard";

let launchDate = new Date("March 27, 2023 14:00:00").getTime();
function tick() {
  let string = "";
  let now = new Date().getTime();

  let countDown = launchDate - now;

  let day = Math.floor(countDown / (1000 * 60 * 60 * 24));

  if (day < 10 && day > 0) {
    day = "0" + day;
  }

  if (day > 0) {
    string += "ZILE - ";
    day += " : ";
  } else {
    day = "";
  }

  let hour = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (hour < 10 && hour >= 0) {
    hour = "0" + hour;
  }
  hour += " : ";

  let min = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));

  if (min < 10 && min >= 0) {
    min = "0" + min;
  }

  min += " : ";

  let sec = Math.floor((countDown % (1000 * 60)) / 1000);

  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  }

  string += "ORE - MIN - SEC"

  let time = { day: day, hour: hour, min: min, sec: sec, string: string };
  return time;
}

const itemData = [
  {
    img: background1,
    title: "background1",
  },
  {
    img: background2,
    title: "background2",
  },
  {
    img: background3,
    title: "background3",
  },
  {
    img: background4,
    title: "background4",
  },
];

const LandingPage = () => {
  const ref = useRef();
  const inView = useInView(ref);
  const animation = useAnimation();
  const titleAnimation = useAnimation();
  const [deadline, setDeadline] = useState({});

  setTimeout(() => {
    setDeadline(tick());
  }, 1000);

  useEffect(() => {
    if (inView) {
      titleAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "3vw",
      });
      titleAnimation.start({
        x: "-3vw",
      });
    }
  });
  return (
    <div className="landing-page-container">
      <div className="background-slider-container">
        <BasicSlider />
      </div>
      <div className="matches-section">
        <MatchCard />
        <NextMatchCard timer={deadline} />
      </div>
      <section className="players-section">
        <Title title="Jucatori" />
        <div className="players-card-section">
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </div>
        <NavLink className="players-link" to="/players">
          Vezi toti jucatorii <ArrowForwardIcon className="arrowright-icon" />
        </NavLink>
      </section>
      <section ref={ref} className="gallery-section">
        <motion.div className="gallery-title-section" animate={titleAnimation}>
          <Title title="Galerie foto" color="#fff" width="fit-content" />
          <NavLink className="gallery-link" to="/gallery">
            Vezi galerie
            <ArrowForwardIcon className="arrowright-icon" />
          </NavLink>
        </motion.div>
        <motion.div className="images-section" animate={animation}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <div key={item.img} className="overflow-image-section">
                <ImageListItem>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    className="gallery-image"
                  />
                </ImageListItem>
              </div>
            ))}
          </ImageList>
        </motion.div>
      </section>
      <section className="news-section">
        <div className="news-card-section">
          <NewsCard number="1" />
          <NewsCard number="2" column="span 3" row="span 2" />
          <NewsCard number="3" column="span 2" />
          <NewsCard number="4" />
          <NewsCard number="5" column="span 4" />
          <NewsCard number="6" column="span 4" />
          {/* <NewsCard number="7" column="span 3"/>
          <NewsCard number="8" /> */}
        </div>
        <div className="news-title-section">
          <div className="middle-news-title-section">
            <Title title="Stiri" color="#000" width="fit-content" />
            <NavLink className="news-link" to="/news">
              Vezi toate stirile
              <ArrowForwardIcon className="arrowright-icon" />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
