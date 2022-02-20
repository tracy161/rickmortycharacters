import React from 'react';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useCharacterDetails from '../../containerHooks/useCharacterDetails';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useCharacterDetails(id);

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
      <Container sx={{ py: 8 }} maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia
                component='img'
                image={data.character.image}
                alt='random'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant='h5' component='h2'>
                  {data.character.name}
                </Typography>
                {data.character.episode?.map((episode) => (
                  <>
                    <h2>Episode</h2>
                    <p>{episode.name}</p>
                  </>
                ))}
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CharacterDetails;
