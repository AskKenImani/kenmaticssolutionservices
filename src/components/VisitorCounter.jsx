import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const checkAndCountVisitor = async () => {
      const hasVisited = sessionStorage.getItem('hasVisited');
      if (hasVisited) {
        fetchCount();
        return;
      }

      const docRef = doc(db, 'counters', 'visitors');
      try {
        await updateDoc(docRef, {
          count: increment(1),
        });

        const updatedDoc = await getDoc(docRef);
        if (updatedDoc.exists()) {
          setCount(updatedDoc.data().count);
          sessionStorage.setItem('hasVisited', 'true');
        }
      } catch (error) {
        console.error('Error updating visitor count:', error);
      }
    };

    const fetchCount = async () => {
      const docRef = doc(db, 'counters', 'visitors');
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setCount(snapshot.data().count);
      }
    };

    checkAndCountVisitor();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h4>Total Visitors:</h4>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        {count !== null ? count : 'Loading...'}
      </p>
    </div>
  );
};

export default VisitorCounter;
