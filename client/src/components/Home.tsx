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

  if (cardSearch) {
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
                key={cardSearch.id}
                nombre={cardSearch.nombre}
                apellido={cardSearch.apellido}
                equipo={cardSearch.equipo}
                posicion={cardSearch.posicion}
                rareza={cardSearch.rareza}
                serie={cardSearch.serie}
                foto={cardSearch.foto}
                id={cardSearch.id}
              />
              <DeleteCard cardId={cardSearch.id} />
            </Box>
            <EditCard card={cardSearch && cardSearch} />
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
