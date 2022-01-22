import React, { useRef, useEffect } from 'react';
import { useSwapiPlanetsFetch } from '../../hooks/useSwapiPlanetsFetch';
// import Bar from '../bar';
import BarChart from '../bar/BarChart';

import './PlanetsChart.css';

const PlanetsChart = () => {
  const {
    state: { planets },
  } = useSwapiPlanetsFetch();
  console.log(
    '🚀 ~ file: PlanetsChart.js ~ line 8 ~ PlanetsChart ~ planets',
    planets
  );

  //   useEffect(() => {

  //   }, []);

  return (
    <article>
      <h1 className="center header">Planets Chart</h1>
      <div className="chart-container">
        <BarChart planets={planets} />
      </div>
    </article>
  );
};

export default PlanetsChart;
