import "./Header.css";
import React, { useState, useEffect } from "react";

function Header() {
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${scrollY ? "header hidden" : "header"}`}>
      <div className="header__container">
        <div className="header__contact">
          <a className="header__contact-facebook" href="#"></a>
          <a className="header__contact-twitter" href="#"></a>
        </div>
        <div className="header__logo"></div>
        <button className="header__button"></button>
      </div>
    </header>
  );
}

export default Header;
