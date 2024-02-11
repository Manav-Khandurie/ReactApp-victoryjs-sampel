import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './TreemapComponent.css';

const TreemapComponent = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 800;
    const height = 600;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('border', '1px solid black');

    const treemapLayout = d3.treemap().size([width, height]).padding(1);

    const root = d3.hierarchy(data).sum((d) => d.value);

    treemapLayout(root);

    const cell = svg
      .selectAll('g')
      .data(root.leaves())
      .enter()
      .append('g')
      .attr('transform', (d) => `translate(${d.x0},${d.y0})`);

    cell.append('a').attr('href', (d) => `/charts/${d.data.name}`); 
    cell
      .select('a')
      .append('rect')
      .attr('width', (d) => d.x1 - d.x0)
      .attr('height', (d) => d.y1 - d.y0)
      .attr('fill', (d) => d.data.color);

    cell
      .select('a')
      .append('text')
      .attr('x', 5)
      .attr('y', 15)
      .text((d) => d.data.name)
      .attr('fill', 'white');

  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default TreemapComponent;
