import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/kenmatics-site/visits")
      .then(res => res.json())
      .then(data => setCount(data.value))
      .catch(err => console.error("Failed to fetch visitor count", err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h4>Total Visitors:</h4>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "red" }}>
        {count !== null ? count : 'Loading...'}
      </p>
    </div>
  );
};

export default VisitorCounter;