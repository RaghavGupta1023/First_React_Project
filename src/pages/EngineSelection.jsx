import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';

export default function EngineSelection() {
  return (
    <>
      <Header />
      <section className="features" id="features">
        <div className="container">
          <h2 className="section-title">Select Your Search Engine</h2>
          <div className="features-grid1">
            <div className="feature-row">
              <Link to="/engine/google/info" className="feature-card">
                <div className="card-icon">
                  <img src="/google.png" alt="Google Logo" className="search-engine-logo" />
                </div>
                <h3>Google</h3>
              </Link>

              <Link to="/engine/duckduckgo/info" className="feature-card">
                <div className="card-icon">
                  <img src="/duckduckgo.png" alt="DuckDuckGo Logo" className="search-engine-logo" />
                </div>
                <h3>DuckDuckGo</h3>
              </Link>
            </div>

            <div className="feature-row">
              <Link to="/engine/bing/info" className="feature-card">
                <div className="card-icon">
                  <img src="/bingg.png" alt="Bing Logo" className="search-engine-logo bing-logo" />
                </div>
                <h3>Bing</h3>
              </Link>

              <Link to="/engine/brave/info" className="feature-card">
                <div className="card-icon">
                  <img src="/brave.png" alt="Brave Logo" className="search-engine-logo" />
                </div>
                <h3>Brave</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
