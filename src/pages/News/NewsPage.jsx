import { ImageList, ImageListItem } from "@mui/material";
import "./NewsPage.scss";
import React, { useEffect, useRef } from "react";
import Title from "../../reusable/Title/Title";
import { motion, useAnimation, useInView } from "framer-motion";
import { landingPageGallery, newsLandingPage } from "../../data/data";
import LaunchIcon from "@mui/icons-material/Launch";

const NewsPage = () => {
  const ref = useRef();
  const inView = useInView(ref);
  const getCols = () => {
    if (window.innerWidth <= 600) {
      return 1;
    } else if (window.innerWidth <= 1100) {
      return 2;
    } else {
      return 3;
    }
  };

  const primaryAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
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
        y: "-3vw",
      });
    }
  });
  return (
    <div className="gallery-section">
      <div className="current-season-page-title">
        <Title title="Stiri" color="#fff" width="fit-content" fontSize="4rem" />
      </div>
      {/* <div
      className="gallery-title-section"
      // animate={secondaryAnimation}
    > */}

      {/* </div> */}
      <motion.div className="images-section" animate={primaryAnimation}>
        <ImageList variant="masonry" cols={getCols()} gap={8}>
          {newsLandingPage.map((item) => (
            <NewsCard
              key={item.id}
              column={item.column}
              row={item.row}
              content={item.content}
            />
          ))}
        </ImageList>
      </motion.div>
    </div>
  );
};

export default NewsPage;
