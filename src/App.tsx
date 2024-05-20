import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import EmergencyInfo from './pages/EmergencyInfo';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/emergency-info" element={<EmergencyInfo />} />
      </Routes>
    </Router>
  );
};


export default App;
