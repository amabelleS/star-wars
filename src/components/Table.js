import React, { useEffect, useState } from 'react';
import { useStarWarsFetch } from '../hooks/useStarWarsFetch';
import axios from 'axios';

const Table = () => {
  const { state } = useStarWarsFetch();
  console.log('🚀 ~ file: Table.js ~ line 7 ~ Table ~ state', state);

  return <div>{JSON.stringify(state)}</div>;
};

export default Table;
