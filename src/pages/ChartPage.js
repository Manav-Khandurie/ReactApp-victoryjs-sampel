// ChartPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import  ChartComponent  from '../components/ChartComponent';
const ChartPage = () => {
  // Access the state name from the route parameters
  const { stateName } = useParams();
  console.log(stateName)
  return (
    <div>
      <h2>Chart Visualization for {stateName}</h2>
      {/* Add chart visualization components here */}
      <ChartComponent />
    </div>
  );
};

export default ChartPage;
