import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="page-fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">Comprehensive IP protection tailored to your commercial goals.</p>
        </div>
      </header>
      
      <section className="section services-page">
        <div className="container">
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-trademark"></i>
              </div>
              <h3>Trademark Registration</h3>
              <p>Secure your brand identity and prevent unauthorized use across local and international markets. We handle availability searches, filing, prosecution, and enforcement.</p>
              <Link to="/contact" className="learn-more">Consult with an Expert <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            {/* Service 2 */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3>Patent Protection</h3>
              <p>Protect your inventions and technological advancements with robust patent drafting and filing. We ensure your innovations remain exclusively yours.</p>
              <Link to="/contact" className="learn-more">Consult with an Expert <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            {/* Service 3 */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-regular fa-copyright"></i>
              </div>
              <h3>Copyright Protection</h3>
              <p>Safeguard your creative, literary, and artistic works from infringement and unauthorized distribution. We offer comprehensive copyright registration services.</p>
              <Link to="/contact" className="learn-more">Consult with an Expert <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            {/* Service 4 */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-compass-drafting"></i>
              </div>
              <h3>Industrial Design</h3>
              <p>Register the unique aesthetic aspects of your products to maintain your competitive edge. Protect the visual design of objects that are not purely utilitarian.</p>
              <Link to="/contact" className="learn-more">Consult with an Expert <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process">
        <div className="container">
          <div className="section-header" style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h4 className="section-subtitle">OUR PROCESS</h4>
            <h2 className="section-title">A Streamlined Approach</h2>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Idea Analysis</h3>
              <p>Comprehensive review of your intellectual property to determine viability and scope.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Legal Strategy</h3>
              <p>Developing a customized roadmap for local and international protection.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Registration</h3>
              <p>Executing precise filing procedures with national and regional IP offices.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Protection</h3>
              <p>Active monitoring and robust defense against infringement of your rights.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
