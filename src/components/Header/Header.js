import "./Header.css";
import React, { useState, useEffect } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import facebook from "../../images/Path.svg";
import twitter from "../../images/twitter.svg";

function Header() {
  const [scrollY, setScrollY] = useState(false);

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function handleClose() {
    setIsMenuOpened(false);
  }

  function handleOpen() {
    setIsMenuOpened(true);
  }

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
    <>
      {isMenuOpened === true ? (
        <header className="header">
          <div className="header__container">
            <div className="header__contact">
              <div className="header__contact-facebook">
                <img src={facebook} alt="icon-facebook" />
              </div>
              <div className="header__contact-twitter">
                <img src={twitter} alt="icon-twitter" />
              </div>
            </div>
            <div className="header__logo"></div>
            <button
              className={`header__button ${isMenuOpened ? "opened" : ""}`}
              onClick={handleClose}
            >
              <div className="line" id="line1"></div>
              <div className="line" id="line2"></div>
            </button>
            {isMenuOpened ? <HeaderMenu onClose={handleClose} /> : ""}
          </div>
        </header>
      ) : (
        <header className={`${scrollY ? "header hidden" : "header"}`}>
          <div className="header__container">
            <div className="header__contact">
              <div className="header__contact-facebook">
                <img src={facebook} alt="icon-facebook" />
              </div>
              <div className="header__contact-twitter">
                <img src={twitter} alt="icon-twitter" />
              </div>
            </div>
            <div className="header__logo"></div>
            <button
              className={`header__button ${isMenuOpened ? "opened" : ""}`}
              onClick={handleOpen}
            >
              <div className="line" id="line1"></div>
              <div className="line" id="line2"></div>
            </button>
            {isMenuOpened ? <HeaderMenu onClose={handleClose} /> : ""}
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
