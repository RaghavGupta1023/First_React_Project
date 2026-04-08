import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';

const toolsData = {
  google: {
    title: 'Google',
    logo: '/google.png',
    toolsTitle: 'Tools of this search engine',
    toolsDesc: 'Google Search, Google Images, Google Maps, Google News, Google Scholar, Voice Search, and Google Lens.',
    mediaTitle: 'Media Section',
    mediaDesc: 'Images or slide shows demonstrating Google Search, Maps navigation, image search, and AI-powered results.',
    videoTitle: 'Video Resources',
    videoDesc: 'Video links explaining how to use Google Search tools, advanced search operators, and Google Lens features.'
  },
  bing: {
    title: 'Bing',
    logo: '/bingg.png',
    toolsTitle: 'Tools of this search engine',
    toolsDesc: 'Bing Search, Bing Images, Bing Videos, Bing Maps, Bing News, Copilot integration, and Visual Search.',
    mediaTitle: 'Media Section',
    mediaDesc: 'Visual demonstrations of Bing\'s visual search capabilities, video previews, and Copilot features.',
    videoTitle: 'Video Resources',
    videoDesc: 'Learn how to use Bing\'s advanced search filters, visual search features, and Microsoft Rewards integration.'
  },
  duckduckgo: {
    title: 'DuckDuckGo',
    logo: '/duckduckgo.png',
    toolsTitle: 'Tools of this search engine',
    toolsDesc: 'DuckDuckGo Search, Bangs, Instant Answers, !Wikipedia integration, and privacy tools.',
    mediaTitle: 'Media Section',
    mediaDesc: 'Screenshots showing DuckDuckGo interface, Bang commands in action, and privacy-focused features.',
    videoTitle: 'Video Resources',
    videoDesc: 'Tutorials on using DuckDuckGo Bangs, understanding privacy features, and customizing search preferences.'
  },
  brave: {
    title: 'Brave',
    logo: '/brave.png',
    toolsTitle: 'Tools of this search engine',
    toolsDesc: 'Brave Search, Independent Index, Ad Blocking, Privacy by default, and transparent ranking.',
    mediaTitle: 'Media Section',
    mediaDesc: 'Demonstrations of Brave Search interface, ad blocking features, and privacy-first design.',
    videoTitle: 'Video Resources',
    videoDesc: 'Learn about Brave\'s independent search index, privacy improvements, and how to maximize search features.'
  }
};

export default function EngineTools() {
  const { engine } = useParams();
  const data = toolsData[engine] || toolsData.google;

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
            <p className="hero-description">Tools & Features</p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>Explore {data.title} Tools</h2>
          <p>Learn about the various tools and features offered by {data.title} to enhance your search experience.</p>
          
          <div className="quiz-button-container">
            <Link to={`/engine/${engine}/quiz`} className="btn-quiz">Take Quiz</Link>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div className="about-card">
            <h3>{data.toolsTitle}</h3>
            <p>{data.toolsDesc}</p>
          </div>

          <div className="about-card">
            <h3>{data.mediaTitle}</h3>
            <p>{data.mediaDesc}</p>
          </div>
        </div>

        <div className="container" style={{ marginTop: '40px' }}>
          <div className="about-card">
            <h3>{data.videoTitle}</h3>
            <p>{data.videoDesc}</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
