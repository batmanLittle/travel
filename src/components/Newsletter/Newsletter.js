import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__main">
          <h2 className="newsletter__title">Sign Up Our Newsletter</h2>
          <p className="newsletter__subtitle">
            The state of Utah in the United States is home to lots of beautiful
            National Parks, & Bryce Canyon National Park ranks as three of the
            most magnificent.
          </p>
        </div>
        <form className="newsletter__form">
          <div className="newsletter__form-block">
            <input
              className="newsletter__input"
              type="text"
              required
              minLength={2}
              maxLength={30}
              pattern="[a-zA-ZА-яёЁ\-\s]*"
              placeholder="NAME"
            />

            <input
              className="newsletter__input"
              type="email"
              minLength="2"
              maxLength="40"
              required
              placeholder="EMAIL"
            />
            <input
              className="newsletter__input"
              type="tel"
              required
              minLength={2}
              maxLength={30}
              pattern="[a-zA-ZА-яёЁ\-\s]*"
              placeholder="PHONE NUMBER"
            />
          </div>

          <button className="newsletter__button">SIGN UP NOW</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
