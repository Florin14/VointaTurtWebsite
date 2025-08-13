import { ImageList, ImageListItem } from "@mui/material";
import "./HistoryPage.scss";
import React, { useEffect, useRef } from "react";
import Title from "../../reusable/Title/Title";
import { motion, useAnimation, useInView } from "framer-motion";
import { landingPageGallery } from "../../data/data";
import LaunchIcon from "@mui/icons-material/Launch";

const HistoryPage = () => {
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
        <Title
          title="Istorie"
          color="#fff"
          width="fit-content"
          fontSize="4rem"
        />
      </div>
      {/* <div
      className="gallery-title-section"
      // animate={secondaryAnimation}
    > */}

      {/* </div> */}
      <motion.div className="images-section" animate={primaryAnimation}>
        <ImageList variant="masonry" cols={getCols()} gap={8}>
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
                  // onClick={() => {
                  //   getImg(item);
                  // }}
                >
                  <LaunchIcon />
                </div>
              </ImageListItem>
            </div>
          ))}
        </ImageList>
      </motion.div>
    
    </div>
  );
};

export default HistoryPage;
