import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section id="about" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500" className={styles.about}>
      <h2>About Us</h2>
      <p>
        At <strong>Kenmatics Solution Services</strong>, we're not just a digital agency, we're your creative and technical growth partners. Born out of a passion for innovation and a drive to solve real-world problems, our mission is simple: to empower individuals, startups, and businesses with smart, seamless, and scalable digital solutions.
      </p>

      <p>
        Whether you're looking to build a strong online presence, automate your business processes, or tell your brand story with clarity and confidence, we've got your back. We blend human-centered design with cutting-edge technologies to create websites, apps, and digital strategies that don't just look good, they work hard, perform fast, and drive results.
      </p>

      <p>
        What truly sets us apart? It's our people-first approach. We take time to understand your vision, values, and goals. We ask the right questions, listen closely, and collaborate intentionally to co-create experiences that feel as good as they function. To us, success isn’t just delivering a project, it’s building relationships, solving problems, and helping you grow.
      </p>

      <p>
        From frontend development and UI/UX design to automation systems, cloud integrations, and beyond, Kenmatics is your one-stop hub for digital transformation. We’re tech enthusiasts, solution providers, and creative thinkers, but above all, we’re humans helping humans win in a digital world.
      </p>

      <p>
        Let’s build something amazing together.
      </p>
    </section>
  );
};

export default About;
