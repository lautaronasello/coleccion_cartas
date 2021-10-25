import {
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GetTeams,
  GetPositions,
  GetSeries,
  GetRarities,
  addCard,
} from '../actions/cardsActions';
import { RootStore } from '../store';

export default function AddCard() {
  const dispatch = useDispatch();

  const [team, setTeam] = useState('Seleccionar Equipo');
  const [position, setPosition] = useState('Seleccionar Posicion');
  const [rarity, setRarity] = useState('Seleccionar Rareza');
  const [serie, setSerie] = useState('Seleccionar Serie');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [card, setCard] = useState<any>();

  useEffect(() => {
    const getAll = () => {
      dispatch(GetTeams());
      dispatch(GetPositions());
      dispatch(GetSeries());
      dispatch(GetRarities());
    };
    getAll();
  }, [dispatch]);

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

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

  useEffect(() => {
    const arrayCards = {
      nombre: name,
      apellido: lastName,
      foto: `${name}-${lastName}.jpg`,
      id_equipos: team,
      id_posiciones: position,
      id_rarezas: rarity,
      id_series: serie,
    };

    setCard(arrayCards);
  }, [name, lastName, team, position, rarity, serie]);

  const handleClick = async (event: React.MouseEvent) => {
    console.log(card);
    dispatch(addCard(card));
  };

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
          <TextField
            onChange={handleChangeName}
            label='Nombre'
            variant='standard'
          />
          <TextField
            onChange={handleChangeLastName}
            label='Apellido'
            variant='standard'
          />
        </FormControl>
        <FormControl sx={{ width: '70%' }}>
          <Select
            sx={{ my: 1 }}
            value={team}
            onChange={handleChangeTeam}
            label='Equipo'
          >
            <MenuItem value='Seleccionar Equipo'>Selecciona Equipo</MenuItem>
            {teamsState &&
              teamsState.map((data) => {
                return (
                  <MenuItem key={data.equipo} value={data.id}>
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
            <MenuItem value='Seleccionar Posicion'>
              Seleccionar posición
            </MenuItem>
            {positionsState &&
              positionsState.map((data) => {
                return (
                  <MenuItem key={data.posicion} value={data.id}>
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
            <MenuItem value='Seleccionar Rareza'>Seleccionar Rareza</MenuItem>
            {raritiesState &&
              raritiesState.map((data) => {
                return (
                  <MenuItem key={data.rareza} value={data.id}>
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
            <MenuItem value='Seleccionar Serie'>Seleccionar Serie</MenuItem>
            {seriesState &&
              seriesState.map((data) => {
                return (
                  <MenuItem key={data.serie} value={data.id}>
                    {data.serie}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <Button
          onClick={handleClick}
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
