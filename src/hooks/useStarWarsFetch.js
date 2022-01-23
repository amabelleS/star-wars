import { useReducer, useEffect } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-vehicles':
      return { ...state, vehicles: action.payload };
    case 'set-max':
      return { ...state, max: action.payload };
    default:
      return state;
  }
};

export const useStarWarsFetch = () => {
  const initialSate = {
    vehicles: [],
    max: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialSate);

  const baseURL = 'https://swapi.py4e.com/api/';

  const fetchStarWarsData = async () => {
    const {
      data: { results: vehicles },
    } = await axios.get(`${baseURL}vehicles/`);

    const updatedVehicles = await Promise.all(
      vehicles.map(async (vehicle) => {
        if (!vehicle.pilots.length) {
          vehicle.sumPopulation = 0;
          return vehicle;
        }
        const { sumPopulation, pilots, planets } = await getPopulationByVehicle(
          vehicle
        );
        vehicle.sumPopulation = sumPopulation;
        vehicle.fetchedPilots = pilots;
        vehicle.planets = planets;
        return vehicle;
      })
    );
    dispatch({
      type: 'set-vehicles',
      payload: updatedVehicles,
    });

    const max = findMax(updatedVehicles);

    dispatch({
      type: 'set-max',
      payload: max,
    });
  };

  useEffect(() => {
    fetchStarWarsData();
  }, []);

  return {
    state,
  };
};

async function getPopulationByVehicle(vehicle) {
  const pilots = await Promise.all(
    vehicle.pilots.map((pilotUrl) => axios.get(pilotUrl))
  );
  const populationsAndPlanets = await Promise.all(
    pilots.map(async (pilot) => {
      const planet = await axios.get(pilot.data.homeworld);
      return { allPlanetsPopulation: +planet.data.population, planet };
    })
  );
  const allPlanetsPopulation = populationsAndPlanets.map(
    (element) => element.allPlanetsPopulation
  );
  const planets = populationsAndPlanets.map((element) => element.planet);

  const sumPopulation = allPlanetsPopulation.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  return { sumPopulation, pilots, planets };
}

const findMax = (arr) => {
  return arr.reduce(function (prev, current) {
    return prev.sumPopulation > current.sumPopulation ? prev : current;
  });
};
