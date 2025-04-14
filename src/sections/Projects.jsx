// sections/Projects.jsx
import React from 'react';
import styles from '../styles/Projects.module.css';
import { Link } from 'react-router-dom';

const projectList = [
  {
    title: 'Appointment Booking System',
    image: '/assets/projects/kenappointment.png',
    website: 'https://kenappointmentapp.netlify.app/',
    description: 'Built a complete frontend and backend website with React.js and Firebase, managed admin, manager, receptionist and users dashboard, and integrated API endpoints.',
    reviewLink: '#reviews'
  },
//   {
//     title: 'SmartTrack Vehicle Monitoring',
//     image: '/assets/projects/smarttrack.png',
//     website: 'https://smarttrackapp.com',
//     description: 'Developed live GPS vehicle tracking interface using Mapbox API and custom alert systems.',
//     reviewLink: '#reviews'
//   },
  {
    title: 'KenPortfolio — Personal Portfolio',
    image: '/assets/projects/kenportfolio.png',
    website: 'https://kenimaniportfolio.netlify.app/',
    description: 'Designed and deployed a modern portfolio with dark/light mode, responsive layout, and contact form.',
    reviewLink: '#reviews'
  }
];

const Projects = () => {
  return (
    <section id="projects" data-aos="zoom-in" className={styles.projects}>
      <h2>Projects</h2>
      <p>Here are a few recent projects we've delivered for clients around the world.</p>

      <div className={styles.grid}>
        {projectList.map((proj, index) => (
          <div key={index} className={styles.card}>
            <a href={proj.website} target="_blank" rel="noreferrer">
              <img src={proj.image} alt={proj.title} className={styles.image} />
            </a>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.reviewLink} className={styles.review}>Read Reviews</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
