import React from 'react';
import { useStarWarsFetch } from '../../hooks/useStarWarsFetch';

import './PopulationTable.css';

const PopulationTable = () => {
  const { state } = useStarWarsFetch();
  const { vehicles, max } = state;
  console.log(
    '🚀 ~ file: PopulationTable.js ~ line 9 ~ PopulationTable ~ state',
    state
  );

  return (
    <>
      {max && (
        <div className="max-population-vehicle_table">
          <div className="table-row">
            <div className="cell pad">Vehicle name with the largest sum:</div>{' '}
            <div className="col cell grow">{state.max.name}</div>
          </div>
          <div className="table-row">
            <div className="cell pad">
              Related home planets and their respective population:
            </div>
            <div className="col cell grow">
              {state.max.planets.map((planet, i) => (
                <span className="row" key={i}>
                  <p>{planet.data.name}:</p>
                  <p>{planet.data.population}</p>
                </span>
              ))}
            </div>
          </div>
          <div className="table-row">
            <div className="cell pad"> Related pilot names:</div>
            <div className="col cell grow">
              {state.max.fetchedPilots.map((pilot, i) => (
                <span key={i} className="row">
                  {pilot.data.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopulationTable;
