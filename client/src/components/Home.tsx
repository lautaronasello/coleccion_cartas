import { CircularProgress, Grid, List, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCards } from '../actions/cardsActions';
import { RootStore } from '../store';
import CardHome from './CardHome';

const Home: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCards = () => dispatch(GetCards());
    getCards();
  }, [dispatch]);

  const cardsState = useSelector((state: RootStore) => state.cards);

  return (
    <Box>
      {cardsState.loading && <CircularProgress />}
      <Grid
        container
        sx={{
          pt: 5,
          mx: 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {cardsState.cards.length !== 0 &&
          cardsState.cards.map((data) => {
            return (
              <CardHome
                key={data.id}
                nombre={data.nombre}
                apellido={data.apellido}
                equipo={data.equipo}
                posicion={data.posicion}
                rareza={data.rareza}
                serie={data.serie}
                foto={data.foto}
                id={data.id}
              />
            );
          })}
      </Grid>
    </Box>
  );
};

export default Home;
