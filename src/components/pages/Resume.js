import React from 'react';

export default function Resume() {
  return (
    <div>
      <a
        href="https://drive.google.com/file/d/1iI94lU70pqxP9NZAK8RFmz55XU_MTIQ0/view?usp=sharing"
        target="_blank" rel="noreferrer" className="resume">Download My Resume</a>
        <div className="row">
      <div className="card col-lg" style={{ width: "18rem;" }}>
        <div className="card-header list-group-item-info">
          Front End Proficiencies:
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">JavaScript</li>
          <li className="list-group-item">jQuery</li>
          <li className="list-group-item">CSS</li>
          <li className="list-group-item">React</li>
        </ul>
      </div>
      <div className="card col-lg" style={{ width: "18rem;" }}>
        <div className="card-header list-group-item-info">
          Back End Proficiencies:
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Node</li>
          <li className="list-group-item">mySQL</li>
          <li className="list-group-item">mongoose</li>
          <li className="list-group-item">Express</li>
          <li className="list-group-item">API's</li>
        </ul>
      </div>
      </div>
    </div>
  );
}
