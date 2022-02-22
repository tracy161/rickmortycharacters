import React from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './FilterFields.css';

import { genderData, speciesData, statusData } from './FilterData';

const FilterFields = ({
  handleFilterGender,
  handleFilterSpecies,
  handleFilterStatus,
}) => {
  const clear = () => {
    window.location.reload();
  };
  return (
    <form>
      <Typography variant='h6' component='h2'>
        Filters
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 170 }}>
        {/* <InputLabel id='demo-simple-select-label'>Gender</InputLabel> */}
        <select onChange={handleFilterGender}>
          <option disable='true' value=''>
            -- Choose Gender --
          </option>
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
          <option disable='true' value=''>
            -- Choose Species --
          </option>
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
          <option disable='true' value=''>
            -- Choose Status --
          </option>
          {statusData.map((data) => (
            <option key={data} value={data}>
              {data}
            </option>
          ))}
        </select>
      </FormControl>
      <Button onClick={clear} style={{ padding: '16px 20px' }}>
        Clear Filter
      </Button>
    </form>
  );
};

export default FilterFields;
