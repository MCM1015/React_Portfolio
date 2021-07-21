import React from 'react';
import resume from '../../images/resume.jpg'

export default function Resume() {
  return (
    <div>
        <div className="row">
      <div className="card col-lg">
        <div className="card-header">
          Front End Proficiencies:
        </div>
        <ul>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>CSS</li>
          <li>React</li>
        </ul>
      </div>
      <div className="col-lg">
      <a
        href="https://drive.google.com/file/d/1iI94lU70pqxP9NZAK8RFmz55XU_MTIQ0/view?usp=sharing"
        target="_blank" rel="noreferrer" className="d-flex justify-content-center"><img src={resume} alt="resume"></img></a>
        </div>
      <div className="card col-lg">
        <div className="card-header">
          Back End Proficiencies:
        </div>
        <ul>
          <li>Node</li>
          <li>mySQL</li>
          <li>mongoose</li>
          <li>Express</li>
          <li>API's</li>
        </ul>
      </div>
      </div>
    </div>
  );
}
