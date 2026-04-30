import './Locations.css';

const Locations = () => {
  return (
    <div className="page-fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Geographic Coverage</h1>
          <p className="page-subtitle">Strategic intellectual property management in Africa and the Gulf.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="countries-grid">
            <div className="country-card">
              <div className="flag">🇲🇦</div>
              <h3>Morocco</h3>
              <p>Comprehensive IP coverage in North Africa's dynamic commercial hub.</p>
              <ul className="coverage-list">
                <li>OMPIC Registration</li>
                <li>Local Enforcement</li>
                <li>Anti-Counterfeiting</li>
              </ul>
            </div>
            <div className="country-card">
              <div className="flag">🇶🇦</div>
              <h3>Qatar</h3>
              <p>Strategic intellectual property management in the heart of the Gulf.</p>
              <ul className="coverage-list">
                <li>Ministry of Commerce Filing</li>
                <li>GCC Compliance</li>
                <li>Commercial Strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section global-vision" style={{paddingTop: '0'}}>
        <div className="container">
          <div className="vision-content">
            <h4 className="section-subtitle">FUTURE READY</h4>
            <h2 className="section-title">Expanding Operations</h2>
            <p>
              We are actively developing our network to provide seamless service across the entirety of the African continent and the GCC. Our goal is to be the single point of contact for all your regional IP needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
