import React from 'react';
import FormControl from '@mui/material/FormControl';

import { genderData, speciesData, statusData } from './FilterData';

const FilterFields = ({handleFilterGender, handleFilterSpecies, handleFilterStatus}) => {
  return (
    <form >
      <FormControl sx={{ m: 1, minWidth: 170 }}>
        {/* <InputLabel id='demo-simple-select-label'>Gender</InputLabel> */}
        <select onChange={handleFilterGender}>
          {genderData.map((data) => (
            <option key={data} value={data}>
              {data}
            </option>
          ))}
        </select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 170 }}>
        {/* <InputLabel id='demo-simple-select-label'>Species</InputLabel> */}
        <select onChange={handleFilterSpecies}>
          {speciesData.map((data) => (
            <option key={data} value={data}>
              {data}
            </option>
          ))}
        </select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 170 }}>
        {/* <InputLabel id='demo-simple-select-label'>Status</InputLabel> */}
        <select onChange={handleFilterStatus}>
          {statusData.map((data) => (
            <option key={data} value={data}>
              {data}
            </option>
          ))}
        </select>
      </FormControl>
    </form>
  );
};

export default FilterFields;
