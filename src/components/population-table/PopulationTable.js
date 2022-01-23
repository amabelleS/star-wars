import React from 'react';
import { useSwapiMaxFetch } from '../../hooks/useSwapiMaxFetch';

import './PopulationTable.css';

const PopulationTable = () => {
  const max = useSwapiMaxFetch();

  return (
    <>
      {max && (
        <div className="max-population-vehicle_table">
          <div className="row-space">
            <div className="cell pad">Vehicle name with the largest sum:</div>{' '}
            <div className="row-space cell grow">{max.name}</div>
          </div>
          <div className="row-space">
            <div className="cell pad">
              Related home planets and their respective population:
            </div>
            <div className="row-space cell grow">
              {max.planets.map((planet, i) => (
                <span className="row-center" key={i}>
                  <p>{planet.data.name}:</p>
                  <p>{planet.data.population}</p>
                </span>
              ))}
            </div>
          </div>
          <div className="row-space">
            <div className="cell pad"> Related pilot names:</div>
            <div className="row-space cell grow">
              {max.fetchedPilots.map((pilot, i) => (
                <span key={i} className="row-center">
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
