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
            {/* Service 1 - Trademark */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-trademark"></i>
              </div>
              <h3>Trademark</h3>
              <p>Secure your brand identity across local and international markets. We handle availability searches, filing, prosecution, enforcement, and renewals to protect your trademarks comprehensively.</p>
              <Link to="/services/trademark" className="learn-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            {/* Service 2 - Patent */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3>Patent</h3>
              <p>Protect your inventions and technological advancements with robust patent drafting, filing, and prosecution. We ensure your innovations remain exclusively yours across all jurisdictions.</p>
              <Link to="/services/patent" className="learn-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            {/* Service 3 - Copyright */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-regular fa-copyright"></i>
              </div>
              <h3>Copyright</h3>
              <p>Safeguard your creative, literary, and artistic works from infringement and unauthorized distribution. We offer comprehensive copyright registration and enforcement services.</p>
              <Link to="/services/copyright" className="learn-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            {/* Service 4 - Anti-Counterfeit / Anti-Piracy */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <h3>Anti-Counterfeit / Anti-Piracy</h3>
              <p>Combat counterfeiting and piracy with our strategic enforcement programs. We coordinate customs recordation, market surveillance, and legal action to protect your brand integrity.</p>
              <Link to="/services/anti-counterfeit" className="learn-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            {/* Service 5 - Litigation Legal Advisory */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-gavel"></i>
              </div>
              <h3>Litigation &amp; Legal Advisory</h3>
              <p>Expert legal representation in IP disputes, infringement cases, and opposition proceedings. Our attorneys provide strategic counsel and aggressive advocacy to defend your rights.</p>
              <Link to="/services/litigation" className="learn-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            {/* Service 6 - Other IP Advisory */}
            <div className="service-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <h3>Other IP Advisory</h3>
              <p>Comprehensive advisory services including industrial designs, trade secrets, licensing, franchising, domain name disputes, and strategic IP portfolio management.</p>
              <Link to="/services/other-ip-advisory" className="learn-more">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
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
