import React from 'react';
import './App.css';
import TopBar from './components/page_components/top_bar/TopBar';
import Footer from './components/page_components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Service from './pages/service/Service';

const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Service />} />
        <Route path="/about" element={<div style={{height: '40vh', marginTop: 100}}>About</div>} />
        <Route path="/contact" element={<div style={{height: '40vh', marginTop: 100}}>Contact</div>} />
        <Route path="/careers" element={<div style={{height: '40vh', marginTop: 100}}>Careers</div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
