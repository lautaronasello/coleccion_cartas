import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GetCards,
  GetTeams,
  GetPositions,
  GetSeries,
  GetRarities,
} from '../actions/cardsActions';
import { RootStore } from '../store';
import Card from './Card';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EditCard from './EditCard';
import DeleteCard from './DeleteCard';

const Home: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCards = () => {
      dispatch(GetCards());
      dispatch(GetTeams());
      dispatch(GetPositions());
      dispatch(GetSeries());
      dispatch(GetRarities());
    };
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

  if (cardSearch[0]) {
    return (
      <>
        <ArrowBackIosNewIcon
          fontSize='large'
          sx={{
            cursor: 'pointer',
            position: 'fixed',
            top: '5rem',
            left: '1rem',
          }}
          onClick={() => window.location.reload()}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid
            container
            sx={{
              mx: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '80vh',
            }}
          >
            <Box>
              <Card
                key={cardSearch[0].cartas.id}
                nombre={cardSearch[0].cartas.nombre}
                apellido={cardSearch[0].cartas.apellido}
                equipo={cardSearch[0].equipos.equipo}
                posicion={cardSearch[0].posiciones.posicion}
                rareza={cardSearch[0].rarezas.rareza}
                serie={cardSearch[0].series.serie}
                foto={cardSearch[0].cartas.foto}
                id={cardSearch[0].cartas.id}
              />
              <DeleteCard cardId={cardSearch[0].cartas.id} />
            </Box>
            <EditCard card={cardSearch[0] && cardSearch[0]} />
          </Grid>
        </Box>
      </>
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
              <Card
                key={data.cartas.id}
                nombre={data.cartas.nombre}
                apellido={data.cartas.apellido}
                equipo={data.equipos.equipo}
                posicion={data.posiciones.posicion}
                rareza={data.rarezas.rareza}
                serie={data.series.serie}
                foto={data.cartas.foto}
                id={data.cartas.id}
              />
            );
          })}
      </Grid>
    </Box>
  );
};

export default Home;
