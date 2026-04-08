import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';

const engineData = {
  google: {
    title: 'Google',
    tagline: 'Organizing the world\'s information',
    logo: '/google.png',
    sections: [
      {
        title: 'What is this search engine',
        content: [
          'Google is a general-purpose web search engine that helps users find information across the internet.',
          'It is used by individuals, organizations, researchers, and businesses worldwide.',
          'Its main purpose is to deliver the most relevant, accurate, and fast search results.'
        ]
      },
      {
        title: 'History & Background',
        content: [
          'Launched in 1998',
          'Founded by Larry Page and Sergey Brin',
          'Created to organize the rapidly growing amount of web information using link-based ranking.'
        ]
      },
      {
        title: 'Key Features',
        content: [
          'PageRank-based ranking algorithm',
          'Image, video, and voice search',
          'AI-powered features like featured snippets and knowledge panels'
        ]
      },
      {
        title: 'Advantages / Use Cases',
        content: [
          'High accuracy and relevance',
          'Extremely fast response time',
          'Deep integration with Gmail, Maps, YouTube, and Android'
        ]
      }
    ]
  },
  bing: {
    title: 'Bing',
    tagline: 'Search powered by Microsoft',
    logo: '/bingg.png',
    sections: [
      {
        title: 'What is this search engine',
        content: [
          'Bing is a web search engine developed by Microsoft',
          'It is widely used on Windows devices and Microsoft platforms',
          'Its main purpose is to deliver visually rich and intelligent search results'
        ]
      },
      {
        title: 'History & Background',
        content: [
          'Launched in 2009 by Microsoft',
          'Designed as a successor to earlier Microsoft search engines',
          'Created to compete with Google using AI and visual search capabilities'
        ]
      },
      {
        title: 'Key Features',
        content: [
          'Visual search and image-based discovery',
          'AI-powered answers and Copilot integration',
          'Video previews and rich multimedia results'
        ]
      },
      {
        title: 'Advantages / Use Cases',
        content: [
          'Strong integration with Windows and Microsoft Edge',
          'Effective for image and video searching',
          'Rewards users through Microsoft Rewards program'
        ]
      }
    ]
  },
  duckduckgo: {
    title: 'DuckDuckGo',
    tagline: 'Privacy, simplified',
    logo: '/duckduckgo.png',
    sections: [
      {
        title: 'What is this search engine',
        content: [
          'DuckDuckGo is a privacy-focused search engine',
          'It does not track users or store personal data.',
          'It is mainly used by users who value anonymity and unbiased search results.'
        ]
      },
      {
        title: 'History & Background',
        content: [
          'Launched in 2008',
          'Founded by Gabriel Weinberg',
          'Created to provide search results without user profiling or tracking.'
        ]
      },
      {
        title: 'Key Features',
        content: [
          'No search history storage',
          'Private search by default',
          'Bang commands for quick site-specific searches'
        ]
      },
      {
        title: 'Advantages / Use Cases',
        content: [
          'Strong privacy protection',
          'No targeted advertisements',
          'Ideal for anonymous and secure searching'
        ]
      }
    ]
  },
  brave: {
    title: 'Brave',
    tagline: 'Privacy-first independent search',
    logo: '/brave.png',
    sections: [
      {
        title: 'What is this search engine',
        content: [
          'Brave Search is an independent, privacy-first search engine.',
          'It does not rely on tracking or third-party search indexes.',
          'It is used by privacy-conscious users'
        ]
      },
      {
        title: 'History & Background',
        content: [
          'Launched in 2021',
          'Developed by Brave Software',
          'Created to offer an alternative to tracking-based search engines'
        ]
      },
      {
        title: 'Key Features',
        content: [
          'Independent search index',
          'No user tracking or profiling',
          'Transparent ranking system'
        ]
      },
      {
        title: 'Advantages / Use Cases',
        content: [
          'High privacy and transparency',
          'Clean and fast interface',
          'Suitable for users avoiding data tracking'
        ]
      }
    ]
  }
};

export default function EngineInfo() {
  const { engine } = useParams();
  const data = engineData[engine] || engineData.google;

  return (
    <>
      <Header />
      
      <section className="hero">
        <div className="container">
          <div className="hero-image">
            <div className="search-illustration">
              <img src={data.logo} alt={`${data.title} Logo`} className={`${engine}-logo`} />
            </div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">{data.title}</h1>
            <p className="hero-description">{data.tagline}</p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-grid">
            {data.sections.map((section, idx) => (
              <div key={idx} className="about-card">
                <h3>{section.title}</h3>
                <ul>
                  {section.content.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Want to know more about this?</h2>
          <Link to={`/engine/${engine}/tools`} className="btn-cta">Learn More</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
