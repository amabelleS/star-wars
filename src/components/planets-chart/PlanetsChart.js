import React from 'react';
import { useSwapiPlanetsFetch } from '../../hooks/useSwapiPlanetsFetch';

import './PlanetsChart.css';

const PlanetsChart = () => {
  const { state } = useSwapiPlanetsFetch();
  console.log(
    '🚀 ~ file: PlanetsChart.js ~ line 8 ~ PlanetsChart ~ state',
    state
  );
  return (
    <article>
      <h1 className="center header">Planets Chart</h1>
      <div className="chart-container"></div>
    </article>
  );
};

export default PlanetsChart;
