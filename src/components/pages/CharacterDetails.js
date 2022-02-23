import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { UseCharacterDetails } from '../../containerHooks/useCharacterDetails';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MainFeaturedPost from '../layouts/PageHeaderDetails';
import Moment from 'moment';

const CharacterDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = UseCharacterDetails({ id });

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
  if (error) return <p>Error {error.message}</p>;

  return (
    <>
      <MainFeaturedPost data={data} />
      <Container sx={{ py: 4 }} maxWidth='lg'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button variant='contained'>Back to Characters</Button>
        </Link>
        <Grid container spacing={4} sx={{ py: 4 }}>
          <Grid xs={12} sm={6} md={6}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                m: 4,
              }}
            >
              <CardMedia
                component='img'
                image={data.character.image}
                alt='random'
              />
              <CardContent>
                <Typography gutterBottom variant='h4' component='h2'>
                  {data.character.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  Gender: {data.character.gender}
                  <br />
                  Status: {data.character.status}
                  <br />
                  Species: {data.character.species}
                  <br />
                  Type: {data.character.type ? data.character.type : 'No Type'}
                  <br />
                  Origin: {data.character.origin.name}
                  <br />
                  Location: {data.character.location.name}
                  <br />
                  Created: {Moment(data.character.created).format('DD/MM/YYYY')}
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CardContent>
              <Typography variant='h4' color='text.primary'>
                Appeared in Episodes:
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {data.character.episode?.map((episode, index) => (
                  <p key={index}>{episode.name}</p>
                ))}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CharacterDetails;
