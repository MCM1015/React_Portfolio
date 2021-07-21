import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
  return (
<div className="collapse navbar-collapse d-flex flex-sm-row flex-lg-row-reverse">
 <ul className="navbar-nav">
       <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active head1' : 'nav-link head'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active head1' : 'nav-link head'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active head1' : 'nav-link head'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active head1' : 'nav-link head'}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
  )
}
