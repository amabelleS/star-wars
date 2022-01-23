import { useState, useEffect } from 'react';
import axios from 'axios';

export const useSwapiPlanetsFetch = () => {
  const [fetchedPlanets, setFetchedPlanets] = useState([]);

  const baseURL = 'https://swapi.py4e.com/api/';

  const fetchStarWarsPlanets = async () => {
    const URLs = [
      `${baseURL}planets/?search=Tatooine`,
      `${baseURL}planets/?search=Alderaan`,
      `${baseURL}planets/?search=Naboo`,
      `${baseURL}planets/?search=Bespin`,
      `${baseURL}planets/?search=Endor`,
    ];

    try {
      const planets = await Promise.allSettled(
        URLs.map((planetUrl) => axios.get(planetUrl))
      );

      const newPlanets = planets
        .filter((p) => p.status === 'fulfilled')
        .map((planet) => planet.value.data.results[0]);

      return newPlanets;
    } catch (err) {
      throw Error(err);
    }
  };

  useEffect(() => {
    fetchStarWarsPlanets().then((planets) => setFetchedPlanets(planets));
  }, []);

  return fetchedPlanets;
};
