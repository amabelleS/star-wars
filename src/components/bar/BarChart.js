import React from 'react';
import { __COLORS__ } from './data';
import {
  MainContainer,
  Container,
  BarChartContainer,
  Number,
  BlackLine,
  MakeBar,
} from './styles';

const BarChart = ({ planets }) => {
  // const log10Y = planets.map((planet) => Math.log10(planet.population));
  // console.log('🚀 ~ file: barChart.js ~ line 14 ~ BarChart ~ log10Y', log10Y);
  const min = 10000;
  const max = 10000000000;

  const planetsToChart = planets.map((planet, i) => {
    const populationLogScale = Math.log10(planet.population);
    return {
      name: planet.name,
      population: planet.population,
      populationLogScale,
      colors: __COLORS__[i],
    };
  });
  console.log(
    '🚀 ~ file: barChart.js ~ line 29 ~ planetsToChart ~ planetsToChart',
    planetsToChart
  );

  return (
    <Container>
      <MainContainer>
        {planetsToChart.length > 0 &&
          planetsToChart.map((planet, i) => {
            return (
              <BarChartContainer key={i}>
                <Number color={planet.colors[1]}>{planet.population}</Number>
                <MakeBar
                  height={planet.populationLogScale * 10}
                  colors={planet.colors.colors}
                />
              </BarChartContainer>
            );
          })}
      </MainContainer>
      <BlackLine />
    </Container>
  );
};

export default BarChart;
