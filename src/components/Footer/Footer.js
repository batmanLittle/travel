import "./Footer.css";
// import user from "../../images/user.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <nav className="footer__nav">
          <h2 className="footer__nav-title">Company</h2>
          <div className="footer__nav-green"></div>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                About
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Press
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Blog
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Careers
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Security
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Driver Centre
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer__nav">
          <h2 className="footer__nav-title">Information</h2>
          <div className="footer__nav-green"></div>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Our Story
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Recipes
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Nutrition
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Resources
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Newsletter
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer__nav">
          <h2 className="footer__nav-title">Information</h2>
          <div className="footer__nav-green"></div>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Customer service
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Recommend a restaurant
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Signup a restaurant
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Jobs
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Press
              </a>
            </li>
            <li className="footer__nav-item">
              <a className="footer__nav-link" href="/">
                Terms of use
              </a>
            </li>
          </ul>
        </nav>
        <nav className=" footer__nav  footer__nav-form">
          <h2 className="footer__nav-title">Subscribe Now</h2>
          <div className="footer__nav-green"></div>
          <form className="footer__form">
            <input
              className="footer__input"
              type="email"
              minLength="2"
              maxLength="40"
              required
              placeholder="Your email"
            ></input>
            <button className="footer__button">Subscribe Now</button>
          </form>
        </nav>
      </div>
      <div className="footer__block">
        <p className="footer__block-text">
          © 2019 Mass Impressions. Designed by Tran Mau Tri Tam for Mass
          Impressions. All rights reserved.
        </p>
        <div className="footer__block-text_two">
          <p className="footer__block-text">Terms of Service</p>
          <p className="footer__block-text"> Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
