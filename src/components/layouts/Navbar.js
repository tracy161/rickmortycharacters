import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant='h6' color='inherit' noWrap>
            <Link to='/' id="home-link" style={{ textDecoration: 'none', color: 'white' }}>
              Rick & Morty Characters
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
