import React from 'react';
import ContactForm from '../components/ContactForm';
import ReviewForm from '../components/ReviewForm';
import styles from '../styles/Contact.module.css';
import formStyles from '../styles/FormElements.module.css';

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-up" className={styles.contactSection}>
      <h2 style={{ textAlign: 'center' }}>Contact & Reviews</h2>
      <div className={styles.formsContainer}>
        <div className={styles.formBox}>
          <h3>Contact Us</h3>
          <ContactForm />
        </div>
        <div className={styles.formBox}>
          <h3>Leave a Review</h3>
          <ReviewForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
