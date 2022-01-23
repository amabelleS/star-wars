import React from 'react';
import { useSwapiPlanetsFetch } from '../../hooks/useSwapiPlanetsFetch';
import BarChart from '../bar-chart';

const PlanetsChart = () => {
  const fetchedPlanets = useSwapiPlanetsFetch();

  return (
    <article>
      <h1 className="center header">Planets Chart</h1>
      {fetchedPlanets.length > 0 ? <BarChart planets={fetchedPlanets} /> : ''}
    </article>
  );
};

export default PlanetsChart;
