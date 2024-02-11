import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TreemapPage from './pages/TreemapPage';
import ChartPage from './pages/ChartPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/treemap" element={<TreemapPage />} />
          <Route path="/charts/:stateName" element={<ChartPage />} /> {/* Use the element prop */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
