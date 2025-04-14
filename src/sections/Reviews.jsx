import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import styles from '../styles/Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const snapshot = await getDocs(collection(db, 'reviews'));
      setReviews(snapshot.docs.map(doc => doc.data()));
    };

    fetchReviews();
  }, []);

  return (
    <section id="reviews" data-aos="fade-down" className={styles.reviews}>
      <h2>Client Reviews</h2>
      {reviews.length === 0 ? (
        <p>Loading reviews...</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p><strong>{review.name}</strong></p>
              <p>"{review.comment}"</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Reviews;
