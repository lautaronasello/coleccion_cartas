import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GetTeams,
  GetPositions,
  GetSeries,
  GetRarities,
} from '../actions/cardsActions';
import { RootStore } from '../store';

export default function AddCard() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAll = () => {
      dispatch(GetTeams());
      dispatch(GetPositions());
      dispatch(GetSeries());
      dispatch(GetRarities());
    };
    getAll();
  }, [dispatch]);

  const [team, setTeam] = useState('Equipo');
  const [position, setPosition] = useState('Posicion');
  const [rarity, setRarity] = useState('Rareza');
  const [serie, setSerie] = useState('Serie');

  const handleChangeTeam = (event: SelectChangeEvent) => {
    setTeam(event.target.value);
  };
  const handleChangePosition = (event: SelectChangeEvent) => {
    setPosition(event.target.value);
  };
  const handleChangeRarity = (event: SelectChangeEvent) => {
    setRarity(event.target.value);
  };
  const handleChangeSerie = (event: SelectChangeEvent) => {
    setSerie(event.target.value);
  };

  const teamsState = useSelector((state: RootStore) => state.cards.teams);
  const positionsState = useSelector(
    (state: RootStore) => state.cards.positions
  );
  const raritiesState = useSelector((state: RootStore) => state.cards.rarities);
  const seriesState = useSelector((state: RootStore) => state.cards.series);

  console.log(teamsState);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
      }}
    >
      <Box
        sx={{
          borderRadius: 4,
          bgcolor: '#fafafa',
          boxShadow: '0 3px 3px 0 rgba(0,0,0,0.5)',
          minHeight: '15rem',
          minWidth: '50%',
          p: '1rem',
          mt: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            fontSize: '2rem',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
          }}
        >
          Agregar Cartas
        </Box>
        <FormControl sx={{ width: '70%' }}>
          <TextField label='Nombre' variant='standard' />
          <TextField label='Apellido' variant='standard' />
        </FormControl>
        <FormControl sx={{ width: '70%' }}>
          <Select
            sx={{ my: 1 }}
            value={team}
            onChange={handleChangeTeam}
            label='Equipo'
          >
            <MenuItem value='Equipo'>Selecciona Equipo</MenuItem>
            {teamsState &&
              teamsState.map((data) => {
                return (
                  <MenuItem key={data.equipo} value={data.equipo}>
                    {data.equipo}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <FormControl sx={{ width: '70%' }}>
          <Select
            sx={{ my: 1 }}
            value={position}
            onChange={handleChangePosition}
            label='Posición'
          >
            <MenuItem value='Posicion'>Seleccionar posición</MenuItem>
            {positionsState &&
              positionsState.map((data) => {
                return (
                  <MenuItem key={data.posicion} value={data.posicion}>
                    {data.posicion}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <FormControl sx={{ width: '70%' }}>
          <Select
            sx={{ my: 1 }}
            value={rarity}
            onChange={handleChangeRarity}
            label='Rareza'
          >
            <MenuItem value='Rareza'>Seleccionar Rareza</MenuItem>
            {raritiesState &&
              raritiesState.map((data) => {
                return (
                  <MenuItem key={data.rareza} value={data.rareza}>
                    {data.rareza}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <FormControl sx={{ width: '70%' }}>
          <Select
            sx={{ my: 1 }}
            value={serie}
            onChange={handleChangeSerie}
            label='Serie'
          >
            <MenuItem value='Serie'>Seleccionar Serie</MenuItem>
            {seriesState &&
              seriesState.map((data) => {
                return (
                  <MenuItem key={data.serie} value={data.serie}>
                    {data.serie}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <Button
          variant='contained'
          size='large'
          sx={{
            bgcolor: '#d71b29',
            mx: '1rem',
            '&:hover': { bgcolor: '#b31621' },
          }}
        >
          Agregar
        </Button>
      </Box>
    </Box>
  );
}
