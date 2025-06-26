import React from 'react';
import styles from '../styles/Projects.module.css';

const projectList = [
  {
    title: 'Appointment Booking System',
    image: '/assets/projects/kenappointment.png',
    website: 'https://kenappointmentapp.netlify.app/',
    description: 'Built a complete frontend and backend website with React.js and Firebase, managed admin, manager, receptionist and users dashboard, and integrated API endpoints.',
    reviewLink: '#reviews'
  },
  {
    title: 'KenPortfolio — Personal Portfolio',
    image: '/assets/projects/kenportfolio.png',
    website: 'https://kenimaniportfolio.netlify.app/',
    description: 'Designed and deployed a modern portfolio with dark/light mode, responsive layout, and contact form.',
    reviewLink: '#reviews'
  },
  {
    title: 'E-commerce Website for All',
    image: '/assets/projects/genecomm.png',
    website: 'https://genecomm.netlify.app/',
    description: 'Built a complete frontend and backend website with React.js and Firebase, a landing page and full ecommerce features, products can be upload, manage sales, track orders and save customers data.',
    reviewLink: '#reviews'
  },
  {
    title: 'Gifdera Store Logo Design',
    image: '/assets/projects/gifdera logo.jpg',
    description: 'Developed a clean, bold logo design for a modern brand with vibrant visual identity.',
    reviewLink: '#reviews'
  },
  {
    title: 'Lixxie Foods Logo',
    image: '/assets/projects/lixxie logo.jpg',
    description: 'Developed a clean, bold logo design for a modern food brand with vibrant visual identity.',
    reviewLink: '#reviews'
  },
  {
    title: 'Gifdera Store Flyer Design',
    image: '/assets/projects/gifdera flyer.jpg',
    description: 'Designed an attractive and informative flyer for Gifdera Store to promote online fashion sales and social presence.',
    reviewLink: '#reviews'
  }
];

const Projects = () => {
  return (
    <section id="projects" data-aos="fade-up" data-aos-duration="5000" data-aos-delay="500" className={styles.projects}>
      <h2>Projects</h2>
      <p>Here are a few recent projects we've delivered for clients around the world.</p>

      <div className={styles.grid}>
        {projectList.map((proj, index) => (
          <div key={index} className={styles.card}>
            {proj.website ? (
              <a href={proj.website} target="_blank" rel="noreferrer">
                <img src={proj.image} alt={proj.title} className={styles.image} />
              </a>
            ) : (
              <img src={proj.image} alt={proj.title} className={styles.image} />
            )}
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
