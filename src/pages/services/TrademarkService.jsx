import './ServiceDetail.css';

const TrademarkService = () => {
  return (
    <div className="page-fade-in">
      {/* Header */}
      <header className="service-detail-header">
        <div className="container">
          <h1>Trademark Registration Services</h1>
        </div>
      </header>

      {/* Hero Banner */}
      <section style={{ background: '#f5f5f0', paddingBottom: '2rem' }}>
        <div className="service-hero-banner">
          <img src="/assets/trademark_hero.png" alt="Trademark Registration Services - Intellectual Property" />
        </div>
      </section>

      {/* Content Section */}
      <section className="service-detail-content">
        <div className="container">
          <div className="service-content-grid">
            <div className="service-content-title">
              <h2>Trademark Registration Services</h2>
            </div>
            <div className="service-content-body">
              <p>
                AfroMena IP is a globally renowned IP firm that provides comprehensive and integrated legal solutions in the areas of trademark, patents, design, copyright, litigation legal advisory, and much more. Our expertise in Trademark covers all aspects related to <a href="#registrations">Trademark Registrations</a>, Licensing as well as Trademark Infringement.
              </p>
              <p>
                Trademarks are nothing but names, logos, short slogans, signatures, or tax stamps that are legally registered or established in order to be distinguished from other goods and services in a particular geographic area. It is one of the most important factors that help distinguish your brand from other service providers in your niche. At AfroMena IP, our attorneys specialize in trademark prosecutions dealing with both contentious and non contentious matters, licensing and franchising, infringement and enforcement, litigation, portfolio management, arbitration, dispute resolution, and anti-counterfeiting actions before courts, and administrative enforcement authorities including customs and police. We assist our clients in implementing global protection strategies for their trademarks, coordinate adequate searches to be absolutely sure that they have an original trademark, and conduct the actions necessary to protect and defend their rights. As a leading company for <a href="#registrations">Trademark Registration in the Middle East</a> and MENA region, we focus on providing tailored-made and bespoke trademark services that exactly match our clients' needs and business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="service-divider" />

      {/* Features Section */}
      <section className="service-features-section" id="registrations">
        <div className="container">
          <h2>Our Trademark Registration Services in GCC countries Comprise of the Following</h2>
          <div className="service-features-grid">
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Conduct availability searches for trademarks and owners in different jurisdictions</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-file-signature"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Advice and fulfill trademark formalities including legalizations</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-folder-open"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>File and prosecute trademark applications for further registration</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-arrows-rotate"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Assist with actions such as renewals, record or maintaining records during the life of the trademark</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-eye"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Maintaining and managing watch service</p>
            </div>
            <div className="service-feature-card">
              <div className="service-feature-icon">
                <i className="fa-solid fa-scale-balanced"></i>
              </div>
              <span className="feature-badge">AFROMENAIP</span>
              <p>Enforcing existing client rights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="service-countries-section">
        <div className="container">
          <h2>We proudly offer our Trademark services in</h2>
          <div className="service-countries-list">
            <p>BAHRAIN | EGYPT | IRAQ | JORDAN | KUWAIT | LEBANON | LIBYA | MOROCCO</p>
            <p>OMAN | QATAR | SAUDI ARABIA | TUNISIA | UNITED ARAB EMIRATES | YEMEN | PALESTINE | ALGERIA</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrademarkService;
