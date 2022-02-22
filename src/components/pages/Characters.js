import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';

import { Link } from 'react-router-dom';
import useCharacters from '../../containerHooks/useCharacters';
import FilterFields from '../layouts/filter/FilterFields';

const Characters = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [status, setStatus] = useState('');

  const text = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setName(text.current.value);
  };

  const handleFilterGender = (e) => {
    setGender(e.target.value);
  };

  const handleFilterSpecies = (e) => {
    setSpecies(e.target.value);
  };

  const handleFilterStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleChange = (e, value) => {
    setPage(value);
  };

  const clear = () => {
    window.location.reload();
  };

  const { loading, error, data } = useCharacters(
    page,
    name,
    gender,
    species,
    status
  );

  if (loading)
    return (
      <Container sx={{ py: 8 }} maxWidth='lg'>
        <Box
          sx={{ display: 'flex' }}
          style={{ margin: 'auto', justifyContent: 'center', padding: '50px' }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  if (error)
    return (
      <Container sx={{ py: 8 }} maxWidth='lg'>
        <Box
          sx={{ display: 'flex' }}
          style={{ margin: 'auto', justifyContent: 'center', padding: '50px' }}
        >
          <Typography gutterBottom variant='h5' component='h2'>
            Error {error.message}
          </Typography>
          <Button
            onClick={clear}
            variant='contained'
            style={{ margin: '0 20px' }}
          >
            Back to Characters
          </Button>
        </Box>
      </Container>
    );

  return (
    <>
      <Container>
        <Stack direction='row' spacing={2} style={{ justifyContent: 'center' }}>
          <FilterFields
            handleFilterGender={handleFilterGender}
            handleFilterSpecies={handleFilterSpecies}
            handleFilterStatus={handleFilterStatus}
          />
        </Stack>
        <Stack direction='row' mt={4} style={{ justifyContent: 'center' }}>
          <Paper
            component='form'
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 500,
            }}
          >
            <input
              type='text'
              placeholder='Search Characters Name'
              ref={text}
              style={input__style}
            />
            <Button onClick={(e) => handleClick(e)}>Search</Button>
          </Paper>
          <Button onClick={clear} style={{ padding: '16px 20px' }}>
            Clear Search
          </Button>
        </Stack>
      </Container>
      <Container sx={{ py: 8 }} maxWidth='lg'>
        <Grid container spacing={4}>
          {data?.characters?.results.map((character) => (
            <Grid item key={character.id} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardMedia
                  component='img'
                  image={character.image}
                  alt='random'
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {character.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    to={`/${character.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button size='small'>View Details</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Stack sx={{ pt: 4 }} direction='row' spacing={2} justifyContent='center'>
        {data?.characters?.info.pages > 1 && (
          <>
            <Pagination
              onChange={handleChange}
              page={page}
              count={data?.characters?.info.pages}
              color='primary'
              size='large'
            />
          </>
        )}
      </Stack>
    </>
  );
};

const input__style = {
  width: '100%',
  border: 'none',
  padding: '16px',
};

export default Characters;
