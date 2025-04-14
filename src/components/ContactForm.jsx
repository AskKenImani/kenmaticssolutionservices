import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/ContactForm.module.css';
import formStyles from '../styles/FormElements.module.css'

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2ai5jti',
      'template_1kby9cs',
      form.current,
      'nsl1_nl9gTWzl8moK'
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Something went wrong.');
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <input type="text" name="name" placeholder="Your Name" required className={formStyles.input} />
      <input type="email" name="email" placeholder="Your Email" required className={formStyles.input} />
      <textarea name="message" placeholder="Your Message" required className={formStyles.input} />
      <button type="submit" className={formStyles.button}>Send</button>
    </form>
  );
};

export default ContactForm;
