import React from 'react';
import Selfie from '../../images/Selfie.jpeg';
//import backGround from '../../images/blue-marble-paint-background.jpg'

export default function About() {
  return (
    <div>
      <div className="row">
        <div className="card d-flex col-lg">
          <img className="selfie" src={Selfie} alt="Selfie"></img>
          <h4>"Know better, do better" - Maya Angelou</h4>
        </div>
        <div className="card d-flex col-lg">
          <div>
            <h3>Bio</h3>
            <p>Born and stayed in Maryland. I am currently training to become a full stack develop through a
              bootcamp provided by Johns Hopkins University.
              My hope is to become proficient in both front and back end web development. Some examples of my work
              thus far can be seen in the portfolio section.
              My work not only highlights who I am as a person but more importantly who I am as a developer.
              <br>
              </br>
              <br>
              </br>
              Some fun facts about me include my love of minions (in case it wasn't blatantly obvious), I'm a TV and book junkie and I love love love the beach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
