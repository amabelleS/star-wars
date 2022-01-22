import React from 'react';
import { useSwapiPlanetsFetch } from '../../hooks/useSwapiPlanetsFetch';
// import BarChart from '../bar-chart';
import BarChart from '../BarChart';

// import './PlanetsChart.css';

const PlanetsChart = () => {
  const {
    state: { planets },
  } = useSwapiPlanetsFetch();

  return (
    <article>
      <h1 className="center header">Planets Chart</h1>
      <BarChart planets={planets} />
    </article>
  );
};

export default PlanetsChart;
