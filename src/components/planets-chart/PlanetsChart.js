import React from 'react';
import { useSwapiPlanetsFetch } from '../../hooks/useSwapiPlanetsFetch';
// import BarChart from '../bar-chart';
import BarChart from '../BarChart';

const PlanetsChart = () => {
  // const {
  //   state: { planets },
  // } = useSwapiPlanetsFetch();
  const fetchedPlanets = useSwapiPlanetsFetch();

  return (
    <article>
      <h1 className="center header">Planets Chart</h1>
      <BarChart planets={fetchedPlanets} />
    </article>
  );
};

export default PlanetsChart;
