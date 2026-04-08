import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';

export default function ThankYou() {
  return (
    <>
      <Header />
      
      <section className="about" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="section-title">Thank You!</h1>
          <p className="section-description">
            Thank you for exploring our website and learning about different search engines.
          </p>

          <div className="about-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <p>
              We hope this platform helped you understand how search engines work,
              their features, tools, and real-world applications.
            </p>
            <p style={{ marginTop: '16px' }}>
              Your time and feedback mean a lot to us.
            </p>
          </div>

          <div style={{ marginTop: '32px' }}>
            <Link to="/" className="btn-cta">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
