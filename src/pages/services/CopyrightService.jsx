import './ServiceDetail.css';

const CopyrightService = () => {
  return (
    <div className="page-fade-in">
      {/* Header */}
      <header className="service-detail-header">
        <div className="container">
          <h1>Copyright Protection Services</h1>
        </div>
      </header>

      {/* Hero Banner */}
      <section style={{ background: '#f5f5f0', paddingBottom: '2rem' }}>
        <div className="service-hero-banner">
          <img src="/assets/trademark_hero.png" alt="Copyright Protection Services - Intellectual Property" />
        </div>
      </section>

      {/* Content Section */}
      <section className="service-detail-content">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-content-title">
              <h2>Copyright Protection Services</h2>
            </div>
            <div className="service-content-body">
              <p>
                AfroMena IP offers comprehensive copyright protection services to safeguard your creative, literary, and artistic works across the Middle East and African regions. Our copyright specialists handle registration, enforcement, and licensing of copyrighted materials in all forms — from written works and software to music, film, and digital content.
              </p>
              <p>
                Copyright protects original works of authorship including literary, dramatic, musical, artistic, and certain other intellectual works. At AfroMena IP, we assist our clients with copyright registration, enforcement against unauthorized use and piracy, drafting licensing agreements, and representing clients in copyright disputes before courts and administrative bodies. We understand the unique challenges of protecting creative works in the digital age and offer tailored strategies to ensure maximum protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="service-divider" />

      {/* Features Section */}
      <section className="service-features-section">
        <div className="container">
          <h2>Our Copyright Services Comprise of the Following</h2>
          <div className="service-features-grid">
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-file-lines"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Copyright registration for literary, artistic, and digital works</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Enforcement against unauthorized reproduction and distribution</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-file-signature"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Drafting and negotiating copyright licensing agreements</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Software and digital content copyright protection</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-gavel"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Copyright dispute resolution and litigation support</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-globe"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>International copyright advisory and compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="service-countries-section">
        <div className="container">
          <h2>We proudly offer our Copyright services in</h2>
          <div className="service-countries-list">
            <p>BAHRAIN | EGYPT | IRAQ | JORDAN | KUWAIT | LEBANON | LIBYA | MOROCCO</p>
            <p>OMAN | QATAR | SAUDI ARABIA | TUNISIA | UNITED ARAB EMIRATES | YEMEN | PALESTINE | ALGERIA</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CopyrightService;
