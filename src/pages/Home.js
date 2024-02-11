import React from 'react';

const Home = () => {
  return (
    <div style={pageStyle}>
      <h2>Welcome to Temperature Analysis</h2>
      <p>This application allows you to visualize temperature data using a treemap and create various charts for analysis.</p>
    </div>
  );
};

const pageStyle = {
  padding: '20px',
};

export default Home;
