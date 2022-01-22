import React, { useRef, useEffect } from 'react';
import { useSwapiPlanetsFetch } from '../../hooks/useSwapiPlanetsFetch';

import './PlanetsChart.css';

const PlanetsChart = () => {
  const {
    state: { planets },
  } = useSwapiPlanetsFetch();
  console.log(
    '🚀 ~ file: PlanetsChart.js ~ line 8 ~ PlanetsChart ~ planets',
    planets
  );

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const width = 42;
    const hight = 20;
    let currX = 20;
    let currY = 10;
    planets.forEach((planet) => {
      const currHight = planet.population;
      console.log(
        '🚀 ~ file: PlanetsChart.js ~ line 27 ~ planets.forEach ~ currHight',
        currHight
      );
      context.fillStyle = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
      context.fillRect(currX, canvas.height - currY, width, currY);
      currX += width + 10;
      currY += hight + 10;
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
