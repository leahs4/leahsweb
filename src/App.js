import React from 'react';
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import PortfolioGallery from './components/PortfolioGallery'; // Adjust the path as necessary


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <PortfolioGallery />
      <Footer />
    </div>
  );
}

export default App;