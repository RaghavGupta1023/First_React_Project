import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';

const quizData = {
  google: [
    { q: '1. Google was launched in which year?', options: ['1995', '1998', '2001'], answer: '1998' },
    { q: '2. Who founded Google?', options: ['Bill Gates', 'Larry Page & Sergey Brin', 'Mark Zuckerberg'], answer: 'Larry Page & Sergey Brin' },
    { q: '3. Google\'s main goal is to?', options: ['Social networking', 'Organize the world\'s information', 'Online shopping'], answer: 'Organize the world\'s information' },
    { q: '4. Which algorithm made Google famous?', options: ['RankBrain', 'PageRank', 'Panda'], answer: 'PageRank' },
    { q: '5. Google is best known for?', options: ['Privacy focus', 'Accurate & fast results', 'Email only'], answer: 'Accurate & fast results' },
    { q: '6. Google Maps is used for?', options: ['Social media', 'Navigation & locations', 'Online shopping'], answer: 'Navigation & locations' },
    { q: '7. Google Lens is used for?', options: ['Image-based search', 'Email services', 'Video calls'], answer: 'Image-based search' },
    { q: '8. Google Search supports which type of search?', options: ['Text only', 'Voice, image & text', 'Image only'], answer: 'Voice, image & text' },
    { q: '9. Google is integrated with?', options: ['Windows OS', 'Android & Gmail', 'Yahoo Mail'], answer: 'Android & Gmail' },
    { q: '10. Google mainly earns revenue from?', options: ['Subscriptions', 'Advertisements', 'Donations'], answer: 'Advertisements' }
  ],
  bing: [
    { q: '1. Bing is developed by?', options: ['Google', 'Microsoft', 'Yahoo'], answer: 'Microsoft' },
    { q: '2. Bing launched in?', options: ['2005', '2009', '2015'], answer: '2009' },
    { q: '3. Bing is known for?', options: ['Privacy', 'Visual search', 'Email'], answer: 'Visual search' },
    { q: '4. Bing integrates with?', options: ['Windows', 'Linux', 'macOS only'], answer: 'Windows' },
    { q: '5. Bing rewards system?', options: ['Bing Coins', 'Microsoft Rewards', 'Search Points'], answer: 'Microsoft Rewards' },
    { q: '6. Bing Copilot uses?', options: ['AI', 'Manual search', 'Ads only'], answer: 'AI' },
    { q: '7. Bing video preview?', options: ['Yes', 'No', 'Paid only'], answer: 'Yes' },
    { q: '8. Bing images focus on?', options: ['Text', 'Visual quality', 'Privacy'], answer: 'Visual quality' },
    { q: '9. Bing search is?', options: ['Paid', 'Free', 'Subscription'], answer: 'Free' },
    { q: '10. Bing is default on?', options: ['Chrome', 'Edge', 'Firefox'], answer: 'Edge' }
  ],
  duckduckgo: [
    { q: '1. DuckDuckGo mainly focuses on?', options: ['Speed', 'Privacy', 'Social networking'], answer: 'Privacy' },
    { q: '2. DuckDuckGo was launched in?', options: ['2005', '2008', '2015'], answer: '2008' },
    { q: '3. DuckDuckGo was founded by?', options: ['Larry Page', 'Gabriel Weinberg', 'Bill Gates'], answer: 'Gabriel Weinberg' },
    { q: '4. DuckDuckGo stores user search history?', options: ['Yes', 'No', 'Sometimes'], answer: 'No' },
    { q: '5. DuckDuckGo shows which type of ads?', options: ['Personalized ads', 'No ads', 'Non-personalized ads'], answer: 'Non-personalized ads' },
    { q: '6. DuckDuckGo supports Bang commands?', options: ['Yes', 'No', 'Paid only'], answer: 'Yes' },
    { q: '7. DuckDuckGo is best for?', options: ['Anonymous browsing', 'Online shopping', 'Gaming'], answer: 'Anonymous browsing' },
    { q: '8. DuckDuckGo tracks IP addresses?', options: ['Yes', 'No', 'Only sometimes'], answer: 'No' },
    { q: '9. DuckDuckGo search results are?', options: ['Biased', 'Unbiased', 'Sponsored only'], answer: 'Unbiased' },
    { q: '10. DuckDuckGo is free to use?', options: ['Yes', 'No', 'Subscription required'], answer: 'Yes' }
  ],
  brave: [
    { q: '1. Brave Search focuses mainly on?', options: ['Tracking users', 'Privacy', 'Email services'], answer: 'Privacy' },
    { q: '2. Brave Search was launched in?', options: ['2018', '2021', '2023'], answer: '2021' },
    { q: '3. Brave Search is developed by?', options: ['Google', 'Brave Software', 'Microsoft'], answer: 'Brave Software' },
    { q: '4. Brave Search uses?', options: ['Google index', 'Bing index', 'Independent index'], answer: 'Independent index' },
    { q: '5. Brave Search stores user data?', options: ['Yes', 'No', 'Only cookies'], answer: 'No' },
    { q: '6. Brave Search is best suited for?', options: ['Privacy-conscious users', 'Gamers', 'Social media users'], answer: 'Privacy-conscious users' },
    { q: '7. Brave Search avoids?', options: ['Personalized tracking', 'Search results', 'Internet access'], answer: 'Personalized tracking' },
    { q: '8. Brave is also known for?', options: ['Built-in ad blocking', 'Email services', 'Cloud storage'], answer: 'Built-in ad blocking' },
    { q: '9. Brave Search results are?', options: ['Paid only', 'Transparent & unbiased', 'Sponsored only'], answer: 'Transparent & unbiased' },
    { q: '10. Brave Search is free to use?', options: ['Yes', 'No', 'Subscription required'], answer: 'Yes' }
  ]
};

export default function EngineQuiz() {
  const { engine } = useParams();
  const questions = quizData[engine] || quizData.google;
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (qIndex, value) => {
    setAnswers(prev => ({ ...prev, [qIndex]: value }));
  };
//Form submission Concept
  const handleSubmitQuiz = (e) => {
    e.preventDefault();
    
    // Calculate score
    let correctCount = 0;
    questions.forEach((question, idx) => {
      if (answers[idx] === question.answer) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <section className="about">
        <div className="container">
          <h2 className="section-title">{engine.charAt(0).toUpperCase() + engine.slice(1)} Quiz</h2>
          <p className="section-description">Answer all questions (one option per question)</p>

          {!submitted ? (
            <form onSubmit={handleSubmitQuiz}>
              {questions.map((question, idx) => (
                <div key={idx} className="about-card" style={{ marginBottom: '30px', padding: '24px', borderLeft: '4px solid var(--primary-color)' }}>
                  <p style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: 'var(--text-dark)' }}>
                    <strong>{question.q}</strong>
                  </p>
                  <div style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {question.options.map((option, optIdx) => (
                      <label key={optIdx} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontSize: '16px' }}>
                        <input 
                          type="radio" 
                          name={`q${idx}`}
                          value={option}
                          onChange={(e) => handleChange(idx, e.target.value)}
                          checked={answers[idx] === option}
                          style={{ marginRight: '12px', cursor: 'pointer', width: '18px', height: '18px' }}
                        />
                        <span style={{ color: answers[idx] === option ? 'var(--primary-color)' : 'var(--text-light)' }}>
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '30px', borderTop: '2px solid var(--border-color)' }}>
                <button 
                  type="submit" 
                  style={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    padding: '14px 40px',
                    fontSize: '16px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    marginRight: '16px'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-dark)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-color)'}
                >
                  Submit Quiz
                </button>
              </div>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <div className="about-card" style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', backgroundColor: 'var(--bg-light)', borderLeft: '4px solid var(--primary-color)' }}>
                <h2 style={{ fontSize: '48px', color: 'var(--primary-color)', marginBottom: '16px' }}>
                  {score}/10
                </h2>
                <p style={{ fontSize: '20px', marginBottom: '24px', color: 'var(--text-light)' }}>
                  You scored <strong>{score * 10}%</strong> on the {engine.charAt(0).toUpperCase() + engine.slice(1)} Quiz!
                </p>
                <p style={{ fontSize: '16px', color: 'var(--text-light)', marginBottom: '32px' }}>
                  {score >= 8 
                    ? '🎉 Excellent! You have great knowledge about ' + (engine.charAt(0).toUpperCase() + engine.slice(1)) + '!'
                    : score >= 6
                    ? '👍 Good job! You know quite a bit about ' + (engine.charAt(0).toUpperCase() + engine.slice(1)) + '.'
                    : '📚 Keep learning! Try to improve your knowledge about ' + (engine.charAt(0).toUpperCase() + engine.slice(1)) + '.'}
                </p>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px' }}>
                  <Link 
                    to={`/engine/${engine}/quiz`}
                    style={{
                      backgroundColor: 'var(--primary-color)',
                      color: 'white',
                      padding: '12px 28px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-dark)'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'var(--primary-color)'}
                  >
                    Retake Quiz
                  </Link>
                  <Link 
                    to={`/engine/${engine}/feedback`}
                    style={{
                      backgroundColor: 'var(--border-color)',
                      color: 'var(--text-dark)',
                      padding: '12px 28px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'var(--primary-color)'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'var(--border-color)'}
                  >
                    Give Feedback
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
