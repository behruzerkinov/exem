import React from "react";
import bannerImg from "./assets/bannerImg.png";
import "./Slider.css"
function Slider() {
  return (
    <div className="container">
      <div className="banner-img__wrapper">
        <img src={bannerImg} alt="banner-img" className="banner-img" />
      </div>
    </div>
  );
}

export default Slider;
