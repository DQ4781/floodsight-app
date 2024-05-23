import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import EmergencyInfo from './pages/EmergencyInfo';
import './styles/App.css';
import BottomSection from './components/BottomSection';
import TopSection from './components/TopSection';

const App = () => {
  return (
    <div style={{ backgroundColor: 'rgb(0, 0, 0)' }} className="text-white min-h-screen flex flex-col">
      <Router>
        <TopSection />
        <main className="flex-grow pt-16 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/emergency-info" element={<EmergencyInfo />} />
          </Routes>
        </main>
        <BottomSection />
      </Router>
    </div>
  );
};

export default App;
