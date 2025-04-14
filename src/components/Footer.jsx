import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { FaLinkedin, FaWhatsapp, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(dayjs().format('MMMM D, YYYY h:mm:ss A'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format('MMMM D, YYYY h:mm:ss A'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={styles.footer}>
      <p className={styles.time}>{currentTime}</p>
      <div className={styles.socialIcons}>
        <a href="https://linkedin.com/in/kehinde-imani" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://wa.me/+2348083117154" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="https://twitter.com/@kehinde_imani" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com/kenmano2020" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://tiktok.com/@kehindeimani" target="_blank" rel="noreferrer"><FaTiktok /></a>
      </div>
      <p className={styles.time}>© 2025 Kenmatics Solution Services. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
