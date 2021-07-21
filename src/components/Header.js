import React, { useState } from 'react';
import Navigation from './Navigation';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function Header() {
  const [currentPage, setCurrentPage] = useState('About')

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="navbar navbar-expand-lg w-full">
        <h1 className="navbar-brand name">Mary McClernan</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div>
        {renderPage()}
      </div>
    </div>
  );
}

export default Header;
