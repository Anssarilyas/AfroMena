import './About.css';

const About = () => {
  return (
    <div className="page-fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">About AfroMena IP</h1>
          <p className="page-subtitle">Regional Expertise. International Vision.</p>
        </div>
      </header>
      
      <section className="section">
        <div className="container about-container">
          <div className="about-text">
            <h4 className="section-subtitle">OUR FIRM</h4>
            <h2 className="section-title">Built to advance your IP agenda.</h2>
            <p>
              AfroMena IP is a specialized legal and consulting firm dedicated to safeguarding your most valuable assets across Africa and the Gulf countries. 
            </p>
            <p>
              We bridge the gap between innovation and legal protection, offering unparalleled precision in navigating the complex intellectual property landscapes of Morocco, Qatar, and beyond.
            </p>
            <ul className="about-features">
              <li><i className="fa-solid fa-check-circle"></i> Precision Legal Strategy</li>
              <li><i className="fa-solid fa-check-circle"></i> Deep Regional Expertise</li>
              <li><i className="fa-solid fa-check-circle"></i> Comprehensive IP Management</li>
            </ul>
          </div>
          <div className="about-visual">
            <div className="glass-card stat-card">
              <i className="fa-solid fa-globe"></i>
              <h3>Cross-Border</h3>
              <p>Seamless IP protection across continents</p>
            </div>
            <div className="glass-card stat-card">
              <i className="fa-solid fa-scale-balanced"></i>
              <h3>Legal Precision</h3>
              <p>Rigorous defense of your assets</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
