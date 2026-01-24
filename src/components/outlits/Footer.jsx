import "./outlits.css"
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-header">
          <img src={assets.Logo} alt="logo" className="footer-logo"/>
          <div className="divider"></div>
          <div className="tagline">
            Virtual Class<br />for Zoom
          </div>
        </div>

        <div className="newsletter-section">
          <p className="newsletter-title">Subscribe to get our Newsletter</p>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="email-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#">Careers</a>
            <span className="pipe">|</span>
            <a href="#">Privacy Policy</a>
            <span className="pipe">|</span>
            <a href="#">Terms & Conditions</a>
          </div>
          <p className="copyright">© 2021 Class Technologies Inc.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;