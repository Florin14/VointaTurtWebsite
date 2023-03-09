import "./LandingPage.scss";
import React, { useEffect, useRef, useState } from "react";
import { MatchCard } from "../../reusable/Card/MatchCard";
import { NextMatchCard } from "../../reusable/Card/NextMatchCard";
import Title from "../../reusable/Title/Title";
import { NavLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ImageList, ImageListItem } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { BasicSlider } from "../../reusable/Slider/BasicSlider";
import NewsCard from "../../reusable/Card/NewsCard";
import CloseIcon from "@mui/icons-material/Close";
import { landingPageGallery, matches, newsLandingPage, results } from "../../data/data";
import { getTimer } from "./utils/Timer";
import { PlayerCard } from "../../reusable/Card/PlayerCard";
import LaunchIcon from "@mui/icons-material/Launch";
import { players } from "../../data/data";

const LandingPage = () => {
  const ref = useRef();
  const inView = useInView(ref);
  const primaryAnimation = useAnimation();
  const secondaryAnimation = useAnimation();
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState({
    img: "",
    title: "",
    content: "",
  });
  const [deadline, setDeadline] = useState({});

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  setTimeout(() => {
    setDeadline(getTimer(new Date("27 March  2023 14:00:00").getTime()));
  }, 1000);

  useEffect(() => {
    if (inView) {
      secondaryAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
        },
      });
      primaryAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      primaryAnimation.start({
        x: "3vw",
      });
      secondaryAnimation.start({
        x: "-3vw",
      });
    }
  });
  return (
    <div className="landing-page-container">
      <div className="background-slider-container">
        <BasicSlider />
      </div>
      <section className="matches-section">
        <MatchCard result={results[0]}/>
        <NextMatchCard timer={deadline} content={matches[0]} />
      </section>
      <section className="players-section">
        <Title title="Jucatori" />
        <div className="players-card-section">
          <PlayerCard player={players[0]} />;
          <PlayerCard player={players[1]} />;
          <PlayerCard player={players[2]} />;
        </div>
        <NavLink className="players-link" to="/players">
          Vezi toti jucatorii <ArrowForwardIcon className="arrowright-icon" />
        </NavLink>
      </section>
      <section ref={ref} className="gallery-section">
        <motion.div
          className="gallery-title-section"
          animate={secondaryAnimation}
        >
          <Title title="Galerie foto" color="#fff" width="fit-content" />
          <NavLink className="gallery-link" to="/gallery">
            Vezi galerie
            <ArrowForwardIcon className="arrowright-icon" />
          </NavLink>
        </motion.div>
        <motion.div className="images-section" animate={primaryAnimation}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {landingPageGallery.map((item) => (
              <div key={item.id} className="overflow-image-section">
                <ImageListItem>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    className="gallery-image"
                  />
                  <div
                    className="gallery-launch-icon"
                    onClick={() => {
                      getImg(item);
                    }}
                  >
                    <LaunchIcon />
                  </div>
                </ImageListItem>
              </div>
            ))}
          </ImageList>
        </motion.div>
        <div
          className={
            model ? "fullscreen-image-gallery open" : "fullscreen-image-gallery"
          }
        >
          <img className="fullscreen-image" src={tempImgSrc.img} />
          <div className="fullscreen-image-content">{tempImgSrc.content}</div>
          <CloseIcon onClick={() => setModel(false)} />
        </div>
      </section>
      <section ref={ref} className="news-section">
        <motion.div className="news-card-section" animate={secondaryAnimation}>
          {newsLandingPage.map((item) => {
            return (
              <NewsCard
                key={item.id}
                column={item.column}
                row={item.row}
                content={item.content}
              />
            );
          })}
        </motion.div>
        <motion.div className="news-title-section" animate={primaryAnimation}>
          <div className="middle-news-title-section">
            <Title title="Stiri" color="#000" width="fit-content" />
            <NavLink className="news-link" to="/news">
              Vezi toate stirile
              <ArrowForwardIcon className="arrowright-icon" />
            </NavLink>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
