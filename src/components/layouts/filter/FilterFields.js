import React from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import { genderData, speciesData, statusData } from './FilterData';

const FilterFields = ({handleFilterGender, handleFilterSpecies, handleFilterStatus}) => {
  const clear = () => {
    window.location.reload(false);
  }
  return (
    <form >
      <FormControl sx={{ m: 1, minWidth: 170 }}>
        {/* <InputLabel id='demo-simple-select-label'>Gender</InputLabel> */}
        <select onChange={handleFilterGender}>
          <option disable value="">--Choose Gender--</option>
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
        <option value="">--Choose Species--</option>
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
        <option value="">--Choose Status--</option>
          {statusData.map((data) => (
            <option key={data} value={data}>
              {data}
            </option>
          ))}
        </select>
      </FormControl>
      <Button onClick={clear}>Clear Filter</Button>
    </form>
  );
};

export default FilterFields;
