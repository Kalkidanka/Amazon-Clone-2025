import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Carousel.module.css"; // Import the CSS module

function CarouselEffect() {
  return (
    <div className={styles.container}>
      {" "}
      {/* Apply styles from your CSS module */}
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <img key={index} src={imageItemLink} alt={`Slide ${index + 1}`} /> // Adding alt for accessibility
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselEffect;
