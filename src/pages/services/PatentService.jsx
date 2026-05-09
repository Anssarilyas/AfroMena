import './ServiceDetail.css';

const PatentService = () => {
  return (
    <div className="page-fade-in">
      {/* Header */}
      <header className="service-detail-header">
        <div className="container">
          <h1>Patent Protection Services</h1>
        </div>
      </header>

      {/* Hero Banner */}
      <section style={{ background: '#f5f5f0', paddingBottom: '2rem' }}>
        <div className="service-hero-banner">
          <img src="/assets/trademark_hero.png" alt="Patent Protection Services - Intellectual Property" />
        </div>
      </section>

      {/* Content Section */}
      <section className="service-detail-content">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-content-title">
              <h2>Patent Protection Services</h2>
            </div>
            <div className="service-content-body">
              <p>
                AfroMena IP provides robust patent protection services that safeguard your inventions and innovations across the Middle East, Africa, and beyond. Our team of patent attorneys and technical specialists have extensive experience in drafting, filing, and prosecuting patent applications in a wide variety of technical fields.
              </p>
              <p>
                A patent is a form of intellectual property that gives its owner the legal right to exclude others from making, using, or selling an invention for a limited period of time. At AfroMena IP, we guide our clients through every step of the patent process — from conducting prior art searches and patentability analyses, to drafting robust patent claims, to filing and prosecuting applications before national and regional patent offices. We also handle patent oppositions, appeals, and infringement actions. Our attorneys specialize in both utility patents and design patents, ensuring full-spectrum protection for our clients' innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="service-divider" />

      {/* Features Section */}
      <section className="service-features-section">
        <div className="container">
          <h2>Our Patent Services Comprise of the Following</h2>
          <div className="service-features-grid">
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Prior art searches and patentability analysis</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-pen-ruler"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Patent drafting and claim preparation</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-folder-open"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Filing and prosecuting patent applications nationally and regionally</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-gavel"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Patent opposition, appeals, and litigation support</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-arrows-rotate"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Patent renewals and portfolio management</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-handshake"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Patent licensing and technology transfer agreements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="service-countries-section">
        <div className="container">
          <h2>We proudly offer our Patent services in</h2>
          <div className="service-countries-list">
            <p>BAHRAIN | EGYPT | IRAQ | JORDAN | KUWAIT | LEBANON | LIBYA | MOROCCO</p>
            <p>OMAN | QATAR | SAUDI ARABIA | TUNISIA | UNITED ARAB EMIRATES | YEMEN | PALESTINE | ALGERIA</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatentService;
