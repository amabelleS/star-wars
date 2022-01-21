import { useReducer, useEffect } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-planets':
      return { ...state, planets: action.payload };
    default:
      return state;
  }
};

export const useSwapiPlanetsFetch = () => {
  const initialSate = {
    planets: [],
  };
  const [state, dispatch] = useReducer(reducer, initialSate);

  const baseURL = 'https://swapi.py4e.com/api/';

  const fetchStarWarsPlanets = async () => {
    const URLs = [
      `${baseURL}planets/?search=Tatooine`,
      `${baseURL}planets/?search=Alderaan`,
      `${baseURL}planets/?search=Naboo`,
      `${baseURL}planets/?search=Bespin`,
      `${baseURL}planets/?search=Endor`,
    ];
    // const {
    //   data: { results: planets },
    // } = await axios.all(URLs.map((planetUrl) => axios.get(planetUrl)));
    const planets = await axios.all(
      URLs.map((planetUrl) => axios.get(planetUrl))
    );
    const newPlanets = planets.map((planet) => planet.data.results);

    dispatch({
      type: 'set-planets',
      payload: newPlanets,
    });
  };

  useEffect(() => {
    fetchStarWarsPlanets();
  }, []);

  return {
    state,
  };
};
