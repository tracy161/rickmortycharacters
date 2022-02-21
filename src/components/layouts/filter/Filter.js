import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { genderData, speciesData, statusData } from './FilterData';

const Filter = (
  gender,
  species,
  status,
  type,
  handleFilterChange,
  handleSubmit,
  text
) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleArrow = () => {
    return open ? (
      <i className='material-icons'>keyboard_arrow_down</i>
    ) : (
      <i className='material-icons'>keyboard_arrow_right</i>
    );
  };

  return (
    <div>
      
        <input
          id='demo-simple-select'
          label='Type'
          value={type}
          onChange={handleFilterChange}
          ref={text}
        />
        <Button onClick={handleSubmit}>Search</Button>
     
      <Button variant='outlined' onClick={handleClickOpen}>
        <i className='material-icons'>
          <span>filter_list</span>
        </i>
        Filter
        {toggleArrow()}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Filter your Characters'}
        </DialogTitle>
        <DialogContent>
          <FormControl sx={{ m: 1, minWidth: 170 }}>
            <InputLabel id='demo-simple-select-label'>Gender</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              label='Gender'
              defaultValue=''
            >
              {genderData.map((data) => (
                <MenuItem key={data} value={data}>
                  {data}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 170 }}>
            <InputLabel id='demo-simple-select-label'>Species</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              label='Status'
              defaultValue=''
            >
              {speciesData.map((data) => (
                <MenuItem key={data} value={data}>
                  {data}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 170 }}>
            <InputLabel id='demo-simple-select-label'>Status</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              label='Status'
              defaultValue=''
            >
              {statusData.map((data) => (
                <MenuItem key={data} value={data}>
                  {data}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 170 }}>
            <InputLabel id='demo-simple-select-label'>Type</InputLabel>
            <input
              id='demo-simple-select'
              label='Type'
              value={type}
              onChange={handleFilterChange}
              ref={text}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Search</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Filter;
