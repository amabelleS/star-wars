import React from 'react';
import { useStarWarsFetch } from '../../hooks/useStarWarsFetch';

import './PopulationTable.css';

const PopulationTable = () => {
  const { state } = useStarWarsFetch();
  console.log(
    '🚀 ~ file: PopulationTable.js ~ line 9 ~ PopulationTable ~ state',
    state
  );

  return (
    <div>
      <h1>PopulationTable</h1>
    </div>
  );
};

export default PopulationTable;
