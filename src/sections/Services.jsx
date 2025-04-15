import React from 'react';
import styles from '../styles/Services.module.css';

const serviceList = [
  {
    title: 'Web Development & Maintenance',
    description:
      'Beautiful, responsive websites that not only look great but work flawlessly, with ongoing maintenance to keep your site fresh, secure, and fast.',
  },
  {
    title: 'Business Registration & Branding',
    description:
      'From CAC registration to stunning brand identity design, we help your business start right and stand out across all platforms.',
  },
  {
    title: 'Packaging & Design',
    description:
      'Custom business packaging that grabs attention, tells your brand story, and adds professional polish to every unboxing experience.',
  },
  {
    title: 'Virtual Assistance',
    description:
      'Reliable, detail-driven support with scheduling, research, email management, and more, so you can focus on growing your business.',
  },
];

const Services = () => {
  return (
    <section id="services" data-aos="slide-right" className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.grid}>
        {serviceList.map((service, index) => (
          <div key={index} className={styles.card}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
