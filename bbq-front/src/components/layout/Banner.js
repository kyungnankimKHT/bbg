import React from "react";
import "../../assets/css/style.css";
import bannerImage from "../../assets/images/category-icons/banner-image.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="BBQ Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
