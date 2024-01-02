import logo from "../img/es.jpg";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <div className="logo-social">
          <img src={logo} alt="logo" />
          <div className="social">
            <Link to="#">
              <TiSocialFacebook className="r-icon" />
            </Link>
            <Link to="#">
              <TiSocialLinkedin className="r-icon" />
            </Link>
            <Link to="#">
              <TiSocialTwitter className="r-icon" />
            </Link>
            <Link to="#">
              <TiSocialInstagram className="r-icon" />
            </Link>
          </div>
        </div>
        <div className="footer-about">
          <h5>About Us</h5>
          <p>
            Loremdolor sit amet, consectetur
            <br /> magna aliqua. Ut enim ad
            <br /> minim veniam,
            <br /> quisdotempor incididunt r
          </p>
        </div>
        <div className="footer-contact">
          <h5>Contact Us</h5>
          <p>
            dolor sit amet,
            <br /> consectetur
            <br /> magna aliqua. <br />
            quisdotempor
            <br /> incididunt ut e
          </p>
        </div>
        <div className="footer-newsletter">
          <h5>Newsletter</h5>
            <input type="text" placeholder="Enter your email" />
          <div className="btn">
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="footer-copy-right"></div>
    </footer>
  );
}

export default Footer;
