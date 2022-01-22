import React from 'react';
import { __COLORS__ } from './colors';

import './BarChart.css';

const BarChart = ({ planets }) => {
  const planetsToChart = planets.map((planet, i) => {
    let populationLogScale = Math.log10(planet.population);
    if (populationLogScale > 5 && populationLogScale < 6)
      populationLogScale -= 4;
    // if (populationLogScale > 6 && populationLogScale < 9)
    //   populationLogScale -= 2;
    return {
      name: planet.name,
      population: planet.population,
      populationLogScale,
      colors: __COLORS__[i],
    };
  });

  return (
    <div className="container">
      <div className="main">
        {planetsToChart.length > 0 &&
          planetsToChart.map((planet, i) => {
            return (
              <div key={i} className="bar-chart">
                <div
                  className="number"
                  style={{ color: planet.colors.colors[1] }}
                >
                  {planet.population}
                </div>
                <div
                  className="bar"
                  style={{
                    height: planet.populationLogScale * 24,
                    backgroundImage: `linear-gradient(
                        to bottom,
                        ${planet.colors.colors[0]},
                        ${planet.colors.colors[1]}
                      )`,
                  }}
                ></div>
                <div className="name">{planet.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BarChart;
