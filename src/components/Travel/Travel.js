import "./Travel.css";
import mountains from "../../images/travel-mountains.jpg";
import river from "../../images/travel-river.png";
import castle from "../../images/travel-castle.png";
import tower from "../../images/travel-tower.png";

function Travel() {
  return (
    <section className="travel">
      <div className="travel__container">
        <h2 className="travel__container-title">
          Become A Travel Pro In One Easy Lesson
        </h2>
        <ul className="travel__container-cards">
          <li className="travel__container-card">
            <a href="#" tabIndex="0">
              <img className="travel__card-image" src={mountains} alt="горы" />
              <div className="travel__card-opacity"></div>
              <p className="travel__card-text">Vacation Home Rental Success</p>
            </a>
          </li>
          <li className="travel__container-card">
            <a href="#" tabIndex="0">
              <img className="travel__card-image" src={river} alt="река" />
              <div className="travel__card-opacity"></div>
              <p className="travel__card-text">Vacation Home Rental Success</p>
            </a>
          </li>
          <li className="travel__container-card">
            <a href="#" tabIndex="0">
              <img className="travel__card-image" src={castle} alt="замок" />
              <div className="travel__card-opacity"></div>
              <p className="travel__card-text">Vacation Home Rental Success</p>
            </a>
          </li>
          <li className="travel__container-card">
            <a href="#" tabIndex="0">
              <img className="travel__card-image" src={tower} alt="горы" />
              <div className="travel__card-opacity"></div>
              <p className="travel__card-text">Vacation Home Rental Success</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Travel;
