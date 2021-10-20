import { CircularProgress, Grid, List, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCards } from '../actions/cardsActions';
import { RootStore } from '../store';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCards = () => dispatch(GetCards());
    getCards();
  }, [dispatch]);

  const cardsState = useSelector((state: RootStore) => state.cards);

  cardsState.cards.length !== 0 && console.log(cardsState.cards);

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      {cardsState.loading && <CircularProgress />}
      <Grid container sx={{ pt: 5 }} spacing={1}>
        {cardsState.cards.length !== 0 &&
          cardsState.cards.map((data) => {
            return (
              <Grid key={data.id} sx={{ border: 1, mr: 1 }} item md={3}>
                <List>
                  <ListItemText primary={data.nombre} />
                  <ListItemText primary={data.apellido} />
                  <ListItemText primary={data.equipo} />
                  <ListItemText primary={data.foto} />
                  <ListItemText primary={data.posicion} />
                  <ListItemText primary={data.rareza} />
                  <ListItemText primary={data.serie} />
                </List>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}

export default Home;
