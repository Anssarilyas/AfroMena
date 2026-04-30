import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const faqs = [
    {
      question: "What is the process for registering a trademark in the Middle East?",
      answer: "The process involves a comprehensive search, filing an application with the local IP office, examination, publication, and finally registration. Timelines vary by country."
    },
    {
      question: "How do I enforce my IP rights against counterfeiters?",
      answer: "We provide robust anti-counterfeiting strategies including customs recordation, market monitoring, and legal action against infringers."
    },
    {
      question: "Is there a unified patent system in the GCC?",
      answer: "Yes, the GCC Patent Office provides a unified system, but recent changes require careful strategic planning for national vs regional filings."
    }
  ];

  return (
    <div className="page-fade-in home-wrapper">
      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-bg">
          <div className="overlay"></div>
        </div>
        <div className="container hero-content-left">
          <h1 className="hero-title-large page-fade-in" style={{fontSize: '3.5rem'}}>
            WE PROVIDE INDUSTRY-FOCUSED SERVICES <br />
            <span className="text-gold">FOR PUBLIC & PRIVATE CLIENTS</span>
          </h1>
        </div>
      </header>

      {/* INTRO & VIDEO SECTION */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>AFROMENA IP WAS FOUNDED TO PROTECT INNOVATION AT A TIME WHEN THE FIELD OF INTELLECTUAL PROPERTY LAW IN THE REGION WAS STILL EMERGING.</h2>
            </div>
            <div className="intro-video">
              <img src="/assets/video_placeholder.png" alt="AfroMena IP Office" className="video-thumb" />
              <div className="play-button"><i className="fa-solid fa-play"></i></div>
            </div>
          </div>
          
          <div className="three-cols">
            <div className="col-box">
              <h4>WHO WE ARE</h4>
              <p>We are a dedicated team of legal experts and IP consultants focused on the MENA and African regions.</p>
              <Link to="/about" className="btn-solid-gold">READ MORE</Link>
            </div>
            <div className="col-box">
              <h4>WHAT WE DO</h4>
              <ul className="mini-list">
                <li><i className="fa-solid fa-check"></i> IP Registration</li>
                <li><i className="fa-solid fa-check"></i> Enforcement & Litigation</li>
                <li><i className="fa-solid fa-check"></i> Anti-counterfeiting</li>
              </ul>
              <Link to="/services" className="btn-solid-gold">OUR SERVICES</Link>
            </div>
            <div className="col-box">
              <h4>WHERE WE WORK</h4>
              <p>Providing seamless coverage across Morocco, Qatar, and extending throughout the African continent.</p>
              <Link to="/locations" className="btn-solid-gold">VIEW LOCATIONS</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta-strip">
        <div className="container cta-flex">
          <h3>IF YOU STAND OUT, YOU FIT IN!</h3>
          <Link to="/contact" className="btn-white-outline">CAREERS</Link>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="section news-section">
        <div className="container">
          <h2 className="section-title-dark">LATEST NEWS</h2>
          <div className="news-grid">
            <div className="news-card">
              <img src="/assets/news_1.png" alt="Tech Innovation" />
              <div className="news-content">
                <p className="news-title">Navigating Tech Innovations and Patent Law in 2026</p>
                <p className="news-date">April 2026</p>
              </div>
            </div>
            <div className="news-card">
              <img src="/assets/news_2.png" alt="Brand Protection" />
              <div className="news-content">
                <p className="news-title">The Evolution of Brand Protection in the GCC</p>
                <p className="news-date">March 2026</p>
              </div>
            </div>
            <div className="news-card">
              <img src="/assets/news_3.png" alt="Corporate Law" />
              <div className="news-content">
                <p className="news-title">New Regulatory Frameworks for Industrial Designs</p>
                <p className="news-date">February 2026</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/about" className="btn-solid-gold">ALL NEWS AND INSIGHTS</Link>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <div className="container map-flex">
          <div className="map-text">
            <h2>WE OPERATE ACROSS THE MIDDLE EAST AND AFRICA</h2>
            <p>We provide a wide range of legal and paralegal services in the Middle East, Africa, and their neighboring regions through an extensive network of branch and representative offices. Our Head Office provides a firm basis for operation in the field of intellectual property across our entire network.</p>
            <Link to="/locations" className="btn-white-outline mt-4">VIEW LOCATIONS</Link>
          </div>
          <div className="map-image">
            <img src="/assets/map_bg.png" alt="Global Map" />
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title-dark">FAQS</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className={`faq-item ${activeFaq === index ? 'active' : ''}`} key={index}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <div className="faq-icon">{activeFaq === index ? '-' : '+'}</div>
                  <h4>{faq.question}</h4>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/contact" className="btn-solid-gold">VIEW ALL FAQS</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
