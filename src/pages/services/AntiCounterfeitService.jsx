import './ServiceDetail.css';

const AntiCounterfeitService = () => {
  return (
    <div className="page-fade-in">
      {/* Header */}
      <header className="service-detail-header">
        <div className="container">
          <h1>Anti-Counterfeit / Anti-Piracy Services</h1>
        </div>
      </header>

      {/* Hero Banner */}
      <section style={{ background: '#f5f5f0', paddingBottom: '2rem' }}>
        <div className="service-hero-banner">
          <img src="/assets/trademark_hero.png" alt="Anti-Counterfeit Anti-Piracy Services - Intellectual Property" />
        </div>
      </section>

      {/* Content Section */}
      <section className="service-detail-content">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-content-title">
              <h2>Anti-Counterfeit &amp; Anti-Piracy Services</h2>
            </div>
            <div className="service-content-body">
              <p>
                AfroMena IP offers a comprehensive suite of anti-counterfeiting and anti-piracy services designed to protect your brand and intellectual property from unauthorized reproduction and distribution. Our experienced team works with customs authorities, law enforcement agencies, and judicial bodies to combat counterfeiting across the Middle East and Africa.
              </p>
              <p>
                Counterfeiting and piracy pose significant threats to businesses, consumers, and economies. At AfroMena IP, we deploy strategic enforcement programs that include customs recordation, market surveillance, test purchases, raid actions, and criminal prosecution of counterfeiters. Our network of investigators and local counsel spans the entire MENA region, enabling us to act swiftly and decisively against infringers. We also provide advisory services on brand protection strategies, product authentication technologies, and supply chain security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="service-divider" />

      {/* Features Section */}
      <section className="service-features-section">
        <div className="container">
          <h2>Our Anti-Counterfeit &amp; Anti-Piracy Services Comprise of the Following</h2>
          <div className="service-features-grid">
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Customs recordation and border protection measures</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-binoculars"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Market surveillance and monitoring for counterfeit goods</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Investigation services and evidence gathering</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-gavel"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Raid actions and criminal prosecution of counterfeiters</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-globe"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Online anti-piracy and digital enforcement</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-lock"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Brand protection strategy and supply chain security advisory</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="service-countries-section">
        <div className="container">
          <h2>We proudly offer our Anti-Counterfeit services in</h2>
          <div className="service-countries-list">
            <p>BAHRAIN | EGYPT | IRAQ | JORDAN | KUWAIT | LEBANON | LIBYA | MOROCCO</p>
            <p>OMAN | QATAR | SAUDI ARABIA | TUNISIA | UNITED ARAB EMIRATES | YEMEN | PALESTINE | ALGERIA</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AntiCounterfeitService;
