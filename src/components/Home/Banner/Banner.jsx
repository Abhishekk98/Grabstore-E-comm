import React from "react";
import "./Banner.scss";
 import BannerImg1 from "../../../assets/banner-img1.webp";
 import BannerImg2 from "../../../assets/banner-img2.webp";
 import BannerImg3 from "../../../assets/banner-img3.webp";






const Banner = () => {
  return (
   <React.Fragment>
   <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={BannerImg1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={BannerImg2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={BannerImg3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </React.Fragment>
    
  );
};

export default Banner;
