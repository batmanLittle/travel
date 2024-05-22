import "./FeaturedVideos.css";
import ocean from "../../images/incredible-ocean.jpg";
import desert from "../../images/desert.jpg";
import castle from "../../images/castle.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/navigation";
function FeaturedVideos() {
  SwiperCore.use([Autoplay]);
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", (swiper) => {
        setActiveSlide(swiper.realIndex);
      });
    }
  }, []);

  const slides = [
    {
      id: 1,
      src: ocean,
      activeSlide: 0,
    },
    {
      id: 2,
      src: castle,
      activeSlide: 1,
    },
    {
      id: 3,
      src: desert,
      activeSlide: 2,
    },
  ];

  return (
    <section className="featured-videos" id="videos">
      <div className="featured-videos__container">
        <h2 className="featured-videos__title">Featured Videos</h2>
        <p className="featured-videos__subtitle">
          The state of Utah in the United States is home to lots of beautiful
          National Parks, & Bryce Canyon National Park ranks as three of the
          most magnificent & awe inspiring.
        </p>
        <Swiper
          ref={swiperRef}
          className="featured-videos__sliders"
          modules={[Virtual, Navigation, Pagination]}
          // onActiveIndexChange={setActiveIndex}
          centeredSlides={true}
          spaceBetween={90}
          speed={900}
          autoplay={{
            delay: 2000, // время в миллисекундах
            disableOnInteraction: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            600: {
              slidesPerView: 1.2,
              spaceBetween: 50,
            },
            800: {
              slidesPerView: 1.4,
              spaceBetween: 60,
            },
            1150: {
              slidesPerView: 1.9,
              spaceBetween: 70,
            },
            1600: {
              slidesPerView: 2.2,
              spaceBetween: 80,
            },
            1850: {
              slidesPerView: 2.5,
              spaceBetween: 90,
            },
            2200: {
              slidesPerView: 2.5,
              spaceBetween: 110,
            },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className={
                activeSlide == slide.activeSlide
                  ? "featured-videos__slider ff"
                  : "featured-videos__slider"
              }
            >
              <button
                className={
                  activeSlide == slide.activeSlide
                    ? "featured-videos__slider-button"
                    : "featured-videos__slider-button featured-videos__opacity"
                }
              ></button>
              <img
                className="featured-videos__slider-img"
                src={slide.src}
                alt="photo"
              />

              <h4
                className={
                  activeSlide == slide.activeSlide
                    ? "featured-videos__slider-text"
                    : "featured-videos__slider-text featured-videos__opacity"
                }
              >
                A Guide To Rocky Mountain Vacations
              </h4>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default FeaturedVideos;
