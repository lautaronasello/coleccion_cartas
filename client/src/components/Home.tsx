import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCards } from '../actions/cardsActions';
import { RootStore } from '../store';
import CardHome from './Card';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
const Home: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCards = () => dispatch(GetCards());
    getCards();
  }, [dispatch]);

  const cardsState = useSelector((state: RootStore) => state.cards);
  const cardSearch = useSelector((state: RootStore) => state.cards.search);

  if (cardsState.loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (cardSearch) {
    return (
      <Box>
        <Grid
          container
          sx={{
            pt: 5,
            mx: 'auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            item
            xs={12}
            md={6}
            lg={3}
          >
            <ArrowBackIosNewIcon
              fontSize='large'
              sx={{ cursor: 'pointer' }}
              onClick={() => window.location.reload()}
            />
            <CardHome
              key={cardSearch[0].id}
              nombre={cardSearch[0].nombre}
              apellido={cardSearch[0].apellido}
              equipo={cardSearch[0].equipo}
              posicion={cardSearch[0].posicion}
              rareza={cardSearch[0].rareza}
              serie={cardSearch[0].serie}
              foto={cardSearch[0].foto}
              id={cardSearch[0].id}
            />
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Box>
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
