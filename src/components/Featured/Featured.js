import "./Featured.css";
import avatar1 from "../../images/Avatar.png";
import avatar2 from "../../images/Avatar (1).png";
import avatar3 from "../../images/Avatar (2).png";
import avatar4 from "../../images/Avatar (3).png";

function Featured() {
  return (
    <section className="featured">
      <div className="featured__container">
        <div className="featured__block">
          <span className="featured__article">FEATURED</span>
          <h3 className="featured__title">
            How To Fly A Private Jet On Your Next Trip
          </h3>
          <p className="featured__subtitle">
            {" "}
            The state of Utah in the United States is home to lots of beautiful
            National Parks, & Bryce Canyon National Park ranks as three of the
            most magnificent & awe inspiring.
          </p>
          <button className="featured__button">READ ARTICLE</button>
        </div>
      </div>
      <div className="featured__stories">
        <h2 className="featured__stories-heading">Featured Stories</h2>
        <ul className="featured__stories-list">
          <li className="featured__stories-item">
            <img className="featured__stories-img" src={avatar1} alt="avatar" />
            <div className="featured__stories-text">
              <h4 className="featured__stories-title">
                Do A Sporting Stag Do In Birmingham
              </h4>
              <p className="featured__stories-subtitle">13 Dec 2019</p>
            </div>
          </li>
          <li className="featured__stories-item">
            <img className="featured__stories-img" src={avatar2} alt="avatar" />
            <div className="featured__stories-text">
              <h4 className="featured__stories-title">
                From Wetlands To Canals And Dams Amsterdam Is Alive
              </h4>
              <p className="featured__stories-subtitle">13 Dec 2019</p>
            </div>
          </li>
          <li className="featured__stories-item">
            <img className="featured__stories-img" src={avatar3} alt="avatar" />
            <div className="featured__stories-text">
              <h4 className="featured__stories-title">
                Stu Unger Rise And Fall Of A Poker Genius
              </h4>
              <p className="featured__stories-subtitle">13 Dec 2019</p>
            </div>
          </li>
          <li className="featured__stories-item">
            <img className="featured__stories-img" src={avatar4} alt="avatar" />
            <div className="featured__stories-text">
              <h4 className="featured__stories-title">
                New Ideas For A Low Cost Vacation On Water
              </h4>
              <p className="featured__stories-subtitle">13 Dec 2019</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Featured;
