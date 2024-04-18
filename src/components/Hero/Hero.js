import "./Hero.css";
import posterMoutain from "../../images/poster-moutain.png";
import posterForest from "../../images/deep-forest.png";
import posterOcean from "../../images/incredible-ocean.jpg";
import React, { useEffect, useState } from "react";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      src: "https://live.verstaem.online/mitravel/files/videos/1.mp4",
      poster: posterMoutain,
      text: "wonderful moutain",
    },
    {
      id: 2,
      src: "https://live.verstaem.online/mitravel/files/videos/2.mp4",
      poster: posterForest,
      text: "deep forest",
    },
    {
      id: 3,
      src: "https://live.verstaem.online/mitravel/files/videos/3.mp4",
      poster: posterOcean,
      text: "incredible ocean",
    },
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Функция для автоматического обновления слайдера
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero__container">
        <span className="hero__article">New book</span>
        <h3 className="hero__title">Mother Earth Hosts Our Travels</h3>
        <p className="hero__subtitle">
          There are not many cities that have experienced such social and
          political extremes in recent history as Amsterdam. In the 20th century
          alone, Amsterdam faced the atrocities of war for the first time in 400
          years, became the radical center of 1960s social movements and
          witnessed a complete
        </p>
        <button className="hero__button">BUY THE BOOK</button>
        <div className="hero__block">
          <form className="hero__form">
            <input className="hero__input" placeholder="Search stories"></input>
            <button className="hero__form-button"></button>
          </form>
          <ul className="hero__carousel">
            {slides.map((slide, index) => (
              <li
                key={slide.id}
                className={
                  index === currentIndex
                    ? "hero__carousel-item"
                    : "hero__carousel-item_none"
                }
              >
                <div className="hero__carousel-media">
                  <video
                    type="video/mp4"
                    controls
                    poster={slide.poster}
                    className="hero__carousel-video"
                    src={slide.src}
                  ></video>
                </div>
                <div className="hero__carousel-controls">
                  <button
                    className="hero__carousel-controls_prev"
                    onClick={goToPrevious}
                  ></button>
                  <p className="hero__carousel-controls_text">{slide.text}</p>
                  <button
                    className="hero__carousel-controls_next"
                    onClick={goToNext}
                  ></button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
