import React from 'react';
import Project from '../Project';

const projects = [
  {
    id: 1,
    name: "Boolean Bookworm",
    imageSrc: `${process.env.PUBLIC_URL}/images/Bb_Website_Preview.png`,
    deployedLink: "https://hidden-refuge-01270.herokuapp.com/",
    githubRepo: "https://github.com/pgurung95/Boolean_Bookworm"
  },
  {
    id: 2,
    name: "Tech Blog",
    imageSrc: `${process.env.PUBLIC_URL}/images/TechBlog_Website_Preview.png`,
    deployedLink: "https://aqueous-citadel-79400.herokuapp.com/",
    githubRepo: "https://github.com/MCM1015/Tech_Blog"
  },
  {
    id: 3,
    name: "Workout Tracker",
    imageSrc: `${process.env.PUBLIC_URL}/images/WorkoutTracker_Website_Preview.png`,
    deployedLink: "https://radiant-island-44468.herokuapp.com/",
    githubRepo: "https://github.com/MCM1015/Workout_Tracker"
  },
  {
    id: 4,
    name: "Marvel",
    imageSrc: `${process.env.PUBLIC_URL}/images/Marvel_Website_Preview.png`,
    deployedLink: "https://mcm1015.github.io/PR1_Marvel/",
    githubRepo: "https://github.com/MCM1015/PR1_Marvel"
  },
  {
    id: 5,
    name: "Weather",
    imageSrc: `${process.env.PUBLIC_URL}/images/Weather_Website_Preview.png`,
    deployedLink: "https://mcm1015.github.io/TheWeatherOutsideIsWeather/",
    githubRepo: "https://github.com/MCM1015/TheWeatherOutsideIsWeather"
  },
  {
    id: 6,
    name: "Twenty One Pilots Fan Site",
    imageSrc: `${process.env.PUBLIC_URL}/images/Twentyonepilots.jpg`,
    deployedLink: "https://mcm1015.github.io/fanpage.21pilots/",
    githubRepo: "https://github.com/MCM1015/fanpage.21pilots"
  }
];

export default function Portfolio() {
  return (
    <div className="row -flex justify-content-center">
      {projects.map((project) => (
        <Project imageSrc={project.imageSrc} name={project.name} deployedLink={project.deployedLink} githubRepo={project.githubRepo} key={project.id} />
      ))}
    </div>
  );
}