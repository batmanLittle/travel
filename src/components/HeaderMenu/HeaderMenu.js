import "./HeaderMenu.css";
import { Link } from "react-scroll";

function HeaderMenu({ onClose }) {
  const handleCloseMenu = () => {
    onClose();
  };

  return (
    <section className="header-menu">
      <ul className="header-menu__list">
        <li className="header-menu__item">
          <Link
            className="header-menu__link"
            to="hero"
            smooth={true}
            duration={700}
            onClick={handleCloseMenu}
          >
            New book
          </Link>
        </li>
        <li className="header-menu__item">
          <Link
            className="header-menu__link"
            to="travel"
            onClick={handleCloseMenu}
            smooth={true}
            duration={900}
          >
            Lessons
          </Link>
        </li>
        <li className="header-menu__item">
          <Link
            to="featured"
            className="header-menu__link"
            onClick={handleCloseMenu}
            smooth={true}
            duration={900}
          >
            Featured
          </Link>
        </li>
        <li className="header-menu__item">
          <Link
            to="videos"
            className="header-menu__link"
            onClick={handleCloseMenu}
            smooth={true}
            duration={900}
          >
            Videos
          </Link>
        </li>
        <li className="header-menu__item">
          <Link
            to="newsletter"
            className="header-menu__link"
            onClick={handleCloseMenu}
            smooth={true}
            duration={900}
          >
            Newsletter
          </Link>
        </li>
        <li className="header-menu__item">
          <Link
            to="inspirations"
            className="header-menu__link"
            smooth={true}
            duration={900}
            onClick={handleCloseMenu}
          >
            Inspirations
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default HeaderMenu;
