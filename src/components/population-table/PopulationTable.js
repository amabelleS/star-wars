import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './PopulationTable.css';

const PopulationTable = () => {
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesPlusSum, setVehiclesPlusSum] = useState([]);
  const [maxSumPop, setMaxSumPop] = useState(0);

  const baseURL = 'https://swapi.py4e.com/api/';

  const fetchVehicles = async () => {
    try {
      const data = await axios.get(`${baseURL}vehicles/`);
      setVehicles(data.data.results);
    } catch (error) {
      console.log(
        '🚀 ~ file: PopulationTable.js ~ line 17 ~ fetchVehicles ~ error',
        error
      );
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const addSumPopulation = () => {
    const updatedVehicles = vehicles.map((vehicle) => {
      const updatedVehicle = { ...vehicle };
      const URLs = updatedVehicle.pilots;

      if (URLs.length > 0) {
        axios.all(URLs.map((endpoint) => axios.get(endpoint))).then((data) => {
          // console.log(data);
          let sum = 0;
          data.forEach((pilot) => {
            console.log(pilot.data.homeworld);
            axios.get(pilot.data.homeworld).then((data) => {
              sum += +data.data.population;
              console.log(sum);
              updatedVehicle.sumPopulation = sum;
            });
          });
        });
      } else {
        updatedVehicle.sumPopulation = 0;
      }
      return updatedVehicle;
    });
    console.log(updatedVehicles);
    setVehiclesPlusSum(updatedVehicles);
    // findMax(updatedVehicles);

    // return updatedVehicles;
  };

  const findMax = (arr) => {
    // const aaa = [...vehiclesPlusSum];
    let max = arr.reduce(function (prev, current) {
      if (+current.sumPopulation > +prev.sumPopulation) {
        return current;
      } else {
        return prev;
      }
    });
    setMaxSumPop(max);
    console.log('🚀 ~ file: PopulationTable.js ~ line 95 ~ findMax ~ max', max);
    return max;
  };

  useEffect(() => {
    addSumPopulation();
  }, [vehicles]);

  // useEffect(() => {
  //   if (vehiclesPlusSum.length > 0) {
  //     // debugger;
  //     // findMax();
  //     let max = vehiclesPlusSum.reduce(function (prev, current) {
  //       if (+current.sumPopulation > +prev.sumPopulation) {
  //         return current;
  //       } else {
  //         return prev;
  //       }
  //     });
  //     setMaxSumPop(max);
  //   }
  // }, [vehiclesPlusSum]);

  return (
    <div>
      <h1>PopulationTable</h1>
    </div>
  );
};

export default PopulationTable;
