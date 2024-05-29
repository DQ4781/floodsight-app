import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import EmergencyInfoTabs from './pages/EmergencyInfo';
import './styles/App.css';
import BottomSection from './components/BottomSection';
import TopSection from './components/TopSection';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Router>
        <TopSection />
        <main className="flex-grow pt-16 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/emergency-info" element={<EmergencyInfoTabs />} />
          </Routes>
        </main>
        <BottomSection />
      </Router>
    </div>
  );
};

export default App;
