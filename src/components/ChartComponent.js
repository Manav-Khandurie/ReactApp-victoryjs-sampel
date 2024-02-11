import React from 'react';
import { VictoryLine, VictoryPie, VictoryLegend, VictoryLabel } from 'victory';

const ChartComponent = () => {
  // Generate random data for the line chart
  const generateLineData = () => {
    const data = [];
    for (let i = 0; i < 7; i++) {
      data.push({ x: i + 1, y: Math.floor(Math.random() * 30) + 10 });
    }
    return data;
  };

  // Generate random data for the donut chart
  const generateDonutData = () => {
    return [
      { x: 'A', y: Math.floor(Math.random() * 100) + 1 },
      { x: 'B', y: Math.floor(Math.random() * 100) + 1 },
      { x: 'C', y: Math.floor(Math.random() * 100) + 1 },
      { x: 'D', y: Math.floor(Math.random() * 100) + 1 },
      { x: 'E', y: Math.floor(Math.random() * 100) + 1 }
    ];
  };

  const lineData = generateLineData();
  const donutData = generateDonutData();

  // Colors for the donut chart legend
  const legendColors = ["#FF5733", "#FFC300", "#DAF7A6", "#C70039", "#FF5733"]; // Add more colors as needed

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <h2>Line Chart</h2>
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc"}
          }}
          data={lineData}
          labels={({ datum }) => datum.y} // Show Y value as label
          labelComponent={<VictoryLabel renderInPortal dy={-10} />} // Adjust label position
          domainPadding={{ x: 20 }} // Add padding to X axis
        />
        <VictoryLegend
          x={80} // Adjust legend position
          y={10}
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
          data={[{ name: "Line Chart", symbol: { fill: "#c43a31" } }]}
        />
      </div>
      <div>
        <h2>Donut Chart</h2>
        <VictoryPie
          data={donutData}
          innerRadius={100}
          colorScale={legendColors}
          labels={({ datum }) => `${datum.x}: ${datum.y}`} // Show label with X and Y values
          labelComponent={<VictoryLabel renderInPortal dy={-10} />} // Adjust label position
        />
        <VictoryLegend
          x={80} // Adjust legend position
          y={10}
          orientation="horizontal"
          gutter={20}
          style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
          data={donutData.map((dataPoint, index) => ({ name: dataPoint.x, symbol: { fill: legendColors[index] } }))}
        />
      </div>
    </div>
  );
};

export default ChartComponent;
