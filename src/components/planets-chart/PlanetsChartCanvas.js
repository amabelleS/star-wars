import React, { useRef, useEffect } from 'react';
import { useSwapiPlanetsFetch } from '../../hooks/useSwapiPlanetsFetch';

import './PlanetsChart.css';

const PlanetsChart = () => {
  const {
    state: { planets },
  } = useSwapiPlanetsFetch();

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const width = 42;
    let currX = 20;
    planets.forEach((planet) => {
      let currHight = Math.log10(planet.population) * 10;

      if (currHight > 50 && currHight < 60) currHight -= 20;
      context.fillStyle = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
      context.fillRect(currX, canvas.height - currHight, width, currHight);
      context.textBaseline = 'bottom';
      // context.fillStyle = '#000000';
      // context.font = 'bold 14px Arial';
      context.fillText(planet.population, currX, canvas.height / 4);
      currX += width + 10;
    });
  }, [planets]);

  return (
    <article>
      <h1 className="center header">Planets Chart</h1>
      <div className="chart-container">
        <canvas ref={canvasRef} id="myCanvas"></canvas>
      </div>
    </article>
  );
};

export default PlanetsChart;
