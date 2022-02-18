import React from 'react';
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

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_CHARACTERS = gql`
  query Character($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
    }
  }
`;

const Characters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading)
    return (
      <Container sx={{ py: 8 }} maxWidth='lg'>
        <Box sx={{ display: 'flex' }} style={{margin: 'auto', justifyContent: 'center'}}>
          <CircularProgress />
        </Box>
      </Container>
    );
  if (error) return <p>Error {error.message}</p>;

  return (
    <>
      <main>
        <Container sx={{ py: 8 }} maxWidth='lg'>
          <Grid container spacing={4}>
            {data?.characters?.results.map((character) => (
              <Grid item key={character.id} xs={12} sm={6} md={4}>
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
                    <Button size='small'>View Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Characters;
