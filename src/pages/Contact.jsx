import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [btnText, setBtnText] = useState('Send Message');
  const [btnColor, setBtnColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText('Sending...');
    setBtnColor('#28a745');
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const country = e.target.country.value;
    const message = e.target.message.value;

    const whatsappMessage = `Hello AfroMena IP,%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Country:* ${country}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/97455795513?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setBtnText('Send Message');
      setBtnColor('');
      e.target.reset();
    }, 2000);
  };

  return (
    <div className="page-fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Start protecting your brand today. Get in touch with our experts.</p>
        </div>
      </header>
      
      <section className="section contact">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="info-block">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h4>Office Location</h4>
                  <p>Morocco & Qatar</p>
                  <a href="https://share.google/fxPI37yXrLqRFGnbT" target="_blank" rel="noreferrer" className="map-link">View on Google Maps <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
              <div className="info-block">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <h4>Email Us</h4>
                  <p>contact@afromenaip.com</p>
                </div>
              </div>
              
              <div className="map-container">
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.56000570653!2d-7.669394468241775!3d33.57240562692019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="250" 
                  style={{border:0, borderRadius: '12px'}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
            
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@company.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <select id="country" required defaultValue="">
                  <option value="" disabled>Select your country</option>
                  <option value="morocco">Morocco</option>
                  <option value="qatar">Qatar</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary btn-block"
                style={{backgroundColor: btnColor, borderColor: btnColor}}
              >
                {btnText}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
