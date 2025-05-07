import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <h1>Welcome to Kenmatics Solution Services</h1>
      <h2> <em>Your tech partner for smart solutions</em> </h2>
      <p>
          Whether you're a startup looking to build your online presence or an established brand ready to automate your workflow, 
          we tailor our solutions to meet your unique goals, because one-size-fits-all is not in our vocabulary.
          <br /><br />
          From sleek websites to smart automations and everything in between, we craft digital experiences that drive results and build meaningful connections.
          <br /><br />
          <em>Your success is our blueprint, and we’re here to build it with you.</em>
      </p>

      <div className={styles.videoContainer}>
        <video 
          autoPlay 
          loop
          controls
          unmuted 
          playsInline 
          className={styles.video}
        >
          <source src="/assets/projects/watermark-2025-04-05-194634427.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Home;
