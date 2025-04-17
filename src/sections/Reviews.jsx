import React, { useEffect, useState, useRef, useCallback } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import styles from '../styles/Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const snapshot = await getDocs(collection(db, 'reviews'));
      setReviews(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchReviews();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.toDate) return '';
    const date = timestamp.toDate();
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const renderStars = (count) => (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((num) => (
        <span key={num} className={num <= count ? styles.filled : ''}>★</span>
      ))}
    </div>
  );

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (reviews.length > 0) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => clearInterval(intervalRef.current);
  }, [nextSlide, reviews.length]);

  const handleManual = (direction) => {
    clearInterval(intervalRef.current);
    direction === 'next' ? nextSlide() : prevSlide();
  };

  return (
    <section id="reviews" className={styles.reviews}>
      <h2>Client Reviews</h2>
      {reviews.length === 0 ? (
        <p>Loading reviews...</p>
      ) : (
        <div className={styles.carouselContainer}>
          <button onClick={() => handleManual('prev')} className={styles.navButton}>‹</button>
          <div className={styles.carousel}>
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`${styles.reviewCard} ${index === current ? styles.active : ''}`}
              >
                <p><strong>{review.name}</strong></p>
                <p>"{review.comment}"</p>
                {renderStars(review.rating)}
                <p className={styles.date}>{formatDate(review.createdAt)}</p>
              </div>
            ))}
          </div>
          <button onClick={() => handleManual('next')} className={styles.navButton}>›</button>
        </div>
      )}
    </section>
  );
};

export default Reviews;
