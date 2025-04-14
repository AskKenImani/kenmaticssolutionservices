import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import styles from '../styles/ReviewForm.module.css';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !comment || rating === 0) {
      alert('Please fill in all fields and select a star rating.');
      return;
    }

    try {
      await addDoc(collection(db, 'reviews'), {
        name,
        comment,
        rating,
        createdAt: Timestamp.now(),
      });
      setSuccess(true);
      setName('');
      setComment('');
      setRating(0);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <div className={styles.reviewForm}>
      <h3>Leave a Review</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={rating >= num ? styles.filled : ''}
              onClick={() => setRating(num)}
            >
              ★
            </span>
          ))}
        </div>
        <button type="submit">Submit Review</button>
        {success && <p className={styles.success}>Thanks for your feedback!</p>}
      </form>
    </div>
  );
};

export default ReviewForm;
