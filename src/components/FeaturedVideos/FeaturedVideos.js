import "./FeaturedVideos.css";
import ocean from "../../images/incredible-ocean.jpg";
import desert from "../../images/desert.jpg";
import castle from "../../images/castle.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function FeaturedVideos() {
  SwiperCore.use([Autoplay]);

  return (
    <section className="featured-videos">
      <div className="featured-videos__container">
        <h2 className="featured-videos__title">Featured Videos</h2>
        <p className="featured-videos__subtitle">
          The state of Utah in the United States is home to lots of beautiful
          National Parks, & Bryce Canyon National Park ranks as three of the
          most magnificent & awe inspiring.
        </p>
        <Swiper
          className="featured-videos__sliders"
          modules={[Virtual, Navigation, Pagination]}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          //   navigation={true}
        >
          <SwiperSlide className="featured-videos__slider">
            <button className="featured-videos__slider-button"></button>
            <img
              className="featured-videos__slider-img"
              src={ocean}
              alt="океан"
            />
            <p className="featured-videos__slider-text">
              A Guide To Rocky Mountain Vacations
            </p>
          </SwiperSlide>
          <SwiperSlide className="featured-videos__slider">
            <button className="featured-videos__slider-button"></button>
            <img className="featured-videos__slider-img" src={castle} alt="" />
            <p className="featured-videos__slider-text">
              A Guide To Rocky Mountain Vacations
            </p>
          </SwiperSlide>
          <SwiperSlide className="featured-videos__slider">
            <button className="featured-videos__slider-button"></button>
            <img className="featured-videos__slider-img" src={desert} alt="" />
            <p className="featured-videos__slider-text">
              A Guide To Rocky Mountain Vacations
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default FeaturedVideos;
