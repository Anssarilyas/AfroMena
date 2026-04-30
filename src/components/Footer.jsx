import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Subscription Banner */}
      <div className="subscribe-banner">
        <div className="container">
          <div className="subscribe-content">
            <h3 className="subscribe-title"><i className="fa-solid fa-paper-plane"></i> STAY UP TO DATE WITH AFROMENA IP</h3>
            <p className="subscribe-text">Subscribe to our newsletter to receive the latest IP updates in the region.</p>
            <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-col">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-col">
                  <label>Email</label>
                  <input type="email" placeholder="john@company.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-col full-width">
                  <label>Company/Organization</label>
                  <input type="text" placeholder="Company Name" />
                </div>
              </div>
              <button type="submit" className="btn-solid-gold mt-2">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>

      <div className="container footer-content">
        <div className="footer-brand">
          <div className="logo-complex logo-footer">
            <div className="logo-icon-wrapper" style={{borderColor: '#fff', color: '#fff'}}>
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <div className="logo-text-wrapper">
              <span className="logo-main" style={{color: '#fff'}}>AfroMena IP</span>
              <span className="logo-sub" style={{color: '#ccc'}}>INTELLECTUAL PROPERTY</span>
            </div>
          </div>
          <p>Your trusted partner in Intellectual Property across Africa and the Gulf.</p>
          <div className="social-links">
            <a href="https://wa.me/97455795513" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/locations">Locations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Trademarks</Link></li>
            <li><Link to="/services">Patents</Link></li>
            <li><Link to="/services">Copyrights</Link></li>
            <li><Link to="/services">Industrial Design</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>&copy; {new Date().getFullYear()} AfroMena IP. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
