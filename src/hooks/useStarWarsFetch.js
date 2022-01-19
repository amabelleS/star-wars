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
        vehicle.sumPopulation = await getPopulationByVehicle(vehicle);
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

  const findMax = (arr) => {
    let max = arr.reduce(function (prev, current) {
      if (+current.sumPopulation > +prev.sumPopulation) {
        return current;
      } else {
        return prev;
      }
    });
    // console.log('🚀 ~ file: PopulationTable.js ~ line 95 ~ findMax ~ max', max);

    return max;
  };

  useEffect(() => {
    fetchStarWarsData();
  }, []);

  return {
    state,
  };
};
async function getPopulationByVehicle(vehicle) {
  const pilots = await axios.all(
    vehicle.pilots.map((pilotUrl) => axios.get(pilotUrl))
  );
  const allPlanetsPopulation = await Promise.all(
    pilots.map(async (pilot) => {
      const plant = await axios.get(pilot.data.homeworld);
      return +plant.data.population;
    })
  );
  return allPlanetsPopulation.reduce((prev, curr) => {
    return +prev + curr;
  }, 0);
}
