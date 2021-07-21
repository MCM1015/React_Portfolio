import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <div className="container-fluid">
        <h2 className="navbar-brand">Contact Me:</h2>
        <div className="collapse navbar-collapse  d-flex">
          <ul className="navbar-nav contactlist">
            <li className="nav-item">
              <a className="nav-link" href="tel:443-765-2885">443-765-2885</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:Mary.C.McClernan@gmail.com"
                target="_blank" rel="noreferrer">Mary.C.McClernan@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <p>INSERT FORM HERE
      </p>
    </div>
  );
}
