import React from 'react';
import Treemap from '../components/TreemapComponent.js';

const TreemapPage = () => {
  // Example temperature data
  const data = {
    name: 'root',
    children: [
        { name: 'Delhi', value: 30 },
        { name: 'Madhya Pradesh', value: 35 },
        { name: 'Uttrakhand', value: 20 },
        { name: 'Harayana', value: 45 },
        { name: 'Punjab', value: 40 },
        { name: 'Uttar Pradesh', value: 25 },
        { name: 'Gujrat', value: 60 },
        { name: 'Rajasthan', value: 50 },
        { name: 'Kerla', value: 55 },
        { name: 'Tamil Nadu', value: 35 },
    ],
  };

  // Function to generate color based on state name
  const generateColor = (name) => {
    // Convert state name to a unique number
    const hashCode = name.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);

    // Use the number to generate a color
    const color = `hsl(${hashCode % 360}, 80%, 50%)`;
    console.log(color);
    return color;
  };

  // Assign color to each node in the data based on state name
  data.children.forEach((state) => {
    state.color = generateColor(state.name);
  });

  return (
    <div style={pageStyle}>
      <h2>Treemap Visualization</h2>
      <p>This page displays temperature data for various states using a treemap.</p>
      <Treemap data={data} />
    </div>
  );
};

const pageStyle = {
  padding: '20px',
};

export default TreemapPage;
