import { FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GetTeams,
  GetPositions,
  GetSeries,
  GetRarities,
  addCard,
} from '../actions/cardsActions';
import { RootStore } from '../store';

export default function EditCard() {
  // const dispatch = useDispatch();

  // const getAll = () => {
  //   dispatch(GetTeams());
  //   dispatch(GetPositions());
  //   dispatch(GetSeries());
  //   dispatch(GetRarities());
  // };
  // getAll();

  // const teamsState = useSelector((state: RootStore) => state.cards.teams);
  // const positionsState = useSelector(
  //   (state: RootStore) => state.cards.positions
  // );
  // const raritiesState = useSelector((state: RootStore) => state.cards.rarities);
  // const seriesState = useSelector((state: RootStore) => state.cards.series);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        bgcolor: '#fafafa',
        boxShadow: '0 5px 5px 0 rgba(0,0,0,0.5)',
        p: '1rem',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ fontStyle: 'thin', fontSize: '2rem' }}>Editar producto</Box>
      <FormControl>
        <TextField placeholder='NOMBRE' />
        <TextField placeholder='apellido' />
      </FormControl>
      <FormControl></FormControl>
    </Box>
  );
}
