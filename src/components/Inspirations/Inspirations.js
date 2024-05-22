import "./Inspirations.css";
import avatar1 from "../../images/Avatar-1.png";
import avatar2 from "../../images/Avatar-2.png";
import avatar3 from "../../images/Avatar-3.png";
import avatar4 from "../../images/Avatar-4.png";
import avatar5 from "../../images/Avatar-5.png";
import avatar6 from "../../images/Avatar-6.png";

import avatar7 from "../../images/Avatar-7.png";
import play from "../../images/play-white.png";

function Inspirations() {
  return (
    <section className="inspirations" id="inspirations">
      <div className="inspirations__container">
        <div className="inspirations__main">
          <h2 className="inspirations__title">Inspirations</h2>
          <p className="inspirations__subtitle">
            The state of Utah in the United States is home to lots of beautiful
            National Parks, & Bryce Canyon National Park ranks as three of the
            most magnificent & awe inspiring.
          </p>
        </div>
        <ul className="inspirations__cards">
          <li className="inspirations__card">
            <p className="inspirations__card-article">featured</p>
            <div className="inspirations__card-content">
              <span className="inspirations__card-span">DESTINATIONS</span>
              <h4 className="inspirations__card-title">
                A Guide To Rocky Mountain Vacations
              </h4>
              <img
                className="inspirations__avatar"
                src={avatar1}
                alt="avatar1"
              />
            </div>
          </li>
          <li className="inspirations__card">
            <div className="inspirations__card-img">
              <img className="inspirations__card-play" src={play} alt="play" />
            </div>
            <div className="inspirations__card-content">
              <span className="inspirations__card-span">DESTINATIONS</span>
              <h4 className="inspirations__card-title">
                Traveling To Barcelona
              </h4>
              <img
                className="inspirations__avatar-two"
                src={avatar2}
                alt="avatar2"
              />
            </div>
          </li>
          <li className="inspirations__card">
            <div className="inspirations__card-content">
              <span className="inspirations__card-span">DESTINATIONS</span>
              <h4 className="inspirations__card-title">
                Party Jokes Startling But Unnecessary
              </h4>
              <img
                className="inspirations__avatar-two"
                src={avatar3}
                alt="avatar3"
              />
            </div>
          </li>
          <li className="inspirations__card">
            <div className="inspirations__card-content">
              <h4 className="inspirations__card-title">
                Maui By Air The Best Way Around The Island
              </h4>
              <img
                className="inspirations__avatar-two"
                src={avatar4}
                alt="avatar4"
              />
            </div>
          </li>
          <li className="inspirations__card card-five">
            <div className="inspirations__card-content card-content_five">
              <span className="inspirations__card-span_five">Andre Gide</span>
              <p className="inspirations__card-text">
                Man cannot discover new oceans unless he has the courage to lose
                sight of the shore.
              </p>
            </div>
            <img
              className="inspirations__avatar-five"
              src={avatar5}
              alt="avatar5"
            />
          </li>
          <li className="inspirations__card">
            <div className="inspirations__card-img">
              <img className="inspirations__card-play" src={play} alt="play" />
            </div>
            <div className="inspirations__card-content">
              <span className="inspirations__card-span">DESTINATIONS</span>
              <h4 className="inspirations__card-title">
                Traveling To Barcelona
              </h4>
              <img
                className="inspirations__avatar-two"
                src={avatar6}
                alt="avatar6"
              />
            </div>
          </li>
          <li className="inspirations__card">
            <p className="inspirations__card-article">featured</p>
            <div className="inspirations__card-content">
              <h4 className="inspirations__card-title">
                A Guide To Rocky Mountain Vacations
              </h4>
              <img
                className="inspirations__avatar"
                src={avatar7}
                alt="avatar7"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Inspirations;
