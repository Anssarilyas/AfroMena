import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Locations from './pages/Locations';
import Contact from './pages/Contact';

/* Service Detail Pages */
import TrademarkService from './pages/services/TrademarkService';
import PatentService from './pages/services/PatentService';
import CopyrightService from './pages/services/CopyrightService';
import AntiCounterfeitService from './pages/services/AntiCounterfeitService';
import LitigationService from './pages/services/LitigationService';
import OtherIPAdvisory from './pages/services/OtherIPAdvisory';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/trademark" element={<TrademarkService />} />
          <Route path="/services/patent" element={<PatentService />} />
          <Route path="/services/copyright" element={<CopyrightService />} />
          <Route path="/services/anti-counterfeit" element={<AntiCounterfeitService />} />
          <Route path="/services/litigation" element={<LitigationService />} />
          <Route path="/services/other-ip-advisory" element={<OtherIPAdvisory />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
