import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';

export default function Home() {
  return (
    <div className="landing-page">
      <Header />
      
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Explore the World of Search Engines</h1>
            <p className="hero-description">
              Discover how search engines work, learn about their architecture, algorithms,
              and understand the technology that powers billions of searches every day.
            </p>
            <Link to="/login" className="btn-cta">Get Started</Link>
          </div>
          <div className="hero-image">
            <div className="search-illustration">
              <div className="search-bar-demo">
                <span className="search-icon">🔍</span>
                <span className="search-text">How do search engines work?</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">What is This Website About?</h2>
          <p className="section-description">
            This interactive platform is designed to help users understand the fascinating
            world of search engines. From crawling and indexing to ranking and retrieval,
            we break down complex concepts into easy-to-understand explanations.
          </p>
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">📚</div>
              <h3>Learn</h3>
              <p>Comprehensive guides on search engine fundamentals, algorithms, and best practices.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">🔬</div>
              <h3>Explore</h3>
              <p>Interactive examples and demonstrations of how search technologies work.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">💡</div>
              <h3>Understand</h3>
              <p>Deep dive into ranking factors, SEO principles, and search optimization.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <h2 className="section-title">Explore Key Topics</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Web Crawling</h3>
              <p>Learn how search engines discover and navigate through billions of web pages.</p>
            </div>
            <div className="feature-card">
              <h3>Indexing</h3>
              <p>Understand how information is organized and stored for lightning-fast retrieval.</p>
            </div>
            <div className="feature-card">
              <h3>Ranking Algorithms</h3>
              <p>Discover the factors that determine which results appear at the top.</p>
            </div>
            <div className="feature-card">
              <h3>Query Processing</h3>
              <p>See how your search queries are interpreted and matched with relevant content.</p>
            </div>
            <div className="feature-card">
              <h3>Search Quality</h3>
              <p>Explore how search engines measure and improve result relevance.</p>
            </div>
            <div className="feature-card">
              <h3>Future Trends</h3>
              <p>Discover emerging technologies shaping the future of search and AI integration.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
