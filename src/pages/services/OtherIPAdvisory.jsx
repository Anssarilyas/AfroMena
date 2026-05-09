import './ServiceDetail.css';

const OtherIPAdvisory = () => {
  return (
    <div className="page-fade-in">
      {/* Header */}
      <header className="service-detail-header">
        <div className="container">
          <h1>Other IP Advisory Services</h1>
        </div>
      </header>

      {/* Hero Banner */}
      <section style={{ background: '#f5f5f0', paddingBottom: '2rem' }}>
        <div className="service-hero-banner">
          <img src="/assets/trademark_hero.png" alt="Other IP Advisory Services - Intellectual Property" />
        </div>
      </section>

      {/* Content Section */}
      <section className="service-detail-content">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-content-title">
              <h2>Other IP Advisory Services</h2>
            </div>
            <div className="service-content-body">
              <p>
                Beyond our core services, AfroMena IP offers a wide range of specialized intellectual property advisory services tailored to meet the diverse needs of our clients. From industrial design registration and trade secret protection to domain name disputes and IP portfolio management, we provide comprehensive counsel that covers the full spectrum of intellectual property law.
              </p>
              <p>
                Our advisory services are designed to help businesses maximize the value of their intellectual property assets while minimizing risk. We assist clients with strategic IP planning, competitive intelligence, freedom-to-operate analyses, and commercialization strategies. Whether you need guidance on geographic indications, plant variety protection, or the intersection of IP and technology, our multidisciplinary team delivers expert advice that supports your business goals across the Middle East and Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="service-divider" />

      {/* Features Section */}
      <section className="service-features-section">
        <div className="container">
          <h2>Our Additional IP Advisory Services Comprise of the Following</h2>
          <div className="service-features-grid">
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-compass-drafting"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Industrial design registration and protection</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-user-secret"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Trade secret protection and confidentiality advisory</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-globe"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Domain name disputes and online brand management</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-chart-pie"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>IP portfolio management and valuation</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Franchising, licensing, and technology transfer</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-seedling"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Geographic indications and plant variety protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="service-countries-section">
        <div className="container">
          <h2>We proudly offer our IP Advisory services in</h2>
          <div className="service-countries-list">
            <p>BAHRAIN | EGYPT | IRAQ | JORDAN | KUWAIT | LEBANON | LIBYA | MOROCCO</p>
            <p>OMAN | QATAR | SAUDI ARABIA | TUNISIA | UNITED ARAB EMIRATES | YEMEN | PALESTINE | ALGERIA</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherIPAdvisory;
