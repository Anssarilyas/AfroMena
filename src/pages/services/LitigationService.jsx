import './ServiceDetail.css';

const LitigationService = () => {
  return (
    <div className="page-fade-in">
      {/* Header */}
      <header className="service-detail-header">
        <div className="container">
          <h1>Litigation &amp; Legal Advisory Services</h1>
        </div>
      </header>

      {/* Hero Banner */}
      <section style={{ background: '#f5f5f0', paddingBottom: '2rem' }}>
        <div className="service-hero-banner">
          <img src="/assets/trademark_hero.png" alt="Litigation Legal Advisory Services - Intellectual Property" />
        </div>
      </section>

      {/* Content Section */}
      <section className="service-detail-content">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-content-title">
              <h2>Litigation &amp; Legal Advisory Services</h2>
            </div>
            <div className="service-content-body">
              <p>
                AfroMena IP provides expert litigation and legal advisory services in all areas of intellectual property law. Our seasoned attorneys represent clients in IP disputes before courts, arbitration tribunals, and administrative bodies across the Middle East and African regions. We bring strategic thinking and aggressive advocacy to protect and enforce our clients' IP rights.
              </p>
              <p>
                Effective IP enforcement requires a combination of legal expertise, strategic planning, and swift action. At AfroMena IP, we handle all types of IP litigation including trademark infringement, patent disputes, copyright violations, trade secret misappropriation, and unfair competition claims. Our legal advisory services cover IP due diligence, portfolio audits, licensing negotiations, and regulatory compliance. We work closely with our clients to develop tailored litigation strategies that align with their business objectives and maximize the value of their intellectual property.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="service-divider" />

      {/* Features Section */}
      <section className="service-features-section">
        <div className="container">
          <h2>Our Litigation &amp; Legal Advisory Services Comprise of the Following</h2>
          <div className="service-features-grid">
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-gavel"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>IP infringement litigation and enforcement actions</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-scale-balanced"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Opposition and cancellation proceedings</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Alternative dispute resolution and arbitration</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-magnifying-glass-chart"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>IP due diligence and portfolio audits</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-file-contract"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Licensing, franchising, and technology transfer agreements</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Regulatory compliance and legal opinion advisory</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="service-countries-section">
        <div className="container">
          <h2>We proudly offer our Litigation &amp; Legal Advisory services in</h2>
          <div className="service-countries-list">
            <p>BAHRAIN | EGYPT | IRAQ | JORDAN | KUWAIT | LEBANON | LIBYA | MOROCCO</p>
            <p>OMAN | QATAR | SAUDI ARABIA | TUNISIA | UNITED ARAB EMIRATES | YEMEN | PALESTINE | ALGERIA</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LitigationService;
