import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import EngineSelection from './pages/EngineSelection';
import EngineInfo from './pages/EngineInfo';
import EngineQuiz from './pages/EngineQuiz';
import EngineTools from './pages/EngineTools';
import EngineFeedback from './pages/EngineFeedback';
import ForgotPassword from './pages/ForgotPassword';
import Feedback from './pages/Feedback';
import ThankYou from './pages/ThankYou';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/engine-selection" element={<EngineSelection />} />
      <Route path="/engine/:engine/info" element={<EngineInfo />} />
      <Route path="/engine/:engine/quiz" element={<EngineQuiz />} />
      <Route path="/engine/:engine/tools" element={<EngineTools />} />
      <Route path="/engine/:engine/feedback" element={<EngineFeedback />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default App;
