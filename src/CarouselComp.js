import React, { useEffect } from "react";
import CarouselJS from "./utils/carouselClass";
import PropTypes from "prop-types";
import "./index.css";

let carouselInstance = null;

const Carousel = (props) => {
  const {
    images,
    isScrollbar,
    paginationType,
    isShowControls,
    snapTop,
    children,
  } = props;

  useEffect(() => {
    //   console.log("Inside use Effect", carouselInstance);
    if (!carouselInstance) {
      document?.querySelectorAll(".gui-carousel")?.forEach((element) => {
        carouselInstance = new CarouselJS(element);
      });
    }
  }, [children]);

  const getPaginationType = () => {
    switch (paginationType) {
      case "dots":
        return "dots";
      case "gallery":
        return "gallery";

      default:
        return "auto";
    }
  };
  return (
    <div
      className="gui-carousel"
      carousel-pagination={getPaginationType()}
      carousel-controls={isShowControls ? "auto" : "none"}
      carousel-scrollbar={isScrollbar ? "auto" : "none"}
      carousel-snapstop={snapTop}
      aria-label="Featured Items Carousel"
    >
      <div class="gui-carousel--scroller">
        {React.Children.map(children, (child) => {
          // Check if the child element is a div
          if (child.type === "div") {
            return <div className="gui-carousel--snap">{child}</div>;
          }
        })}
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  snapTop: "auto",
  isScrollbar: true,
};
export default Carousel;
