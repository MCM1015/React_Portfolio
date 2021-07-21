import React from 'react';

export default function Project(props) {
  return (
    <div className="col-lg-3 m-2">
      <img src={`${props.imageSrc}`} className="card-img" alt="Project preview"></img>
      <div className="card-img-overlay">
        <h4 className="card2">{props.name}</h4>
        </div>
      <div className="card-img-overlay mt-5">
        <a className="btn btn-info m-1" href={props.deployedLink}
          target="_blank" rel="noreferrer">Deployed Website</a>
        <a className="btn btn-info m-1" href={props.githubRepo}
          target="_blank" rel="noreferrer">GitHub
          Repository</a>
      </div>
    </div>
  );
}
