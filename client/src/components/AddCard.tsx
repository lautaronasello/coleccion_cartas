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
import { CardAddType } from '../types';

export default function AddCard() {
  const dispatch = useDispatch();

  const [team, setTeam] = useState('Seleccionar Equipo');
  const [position, setPosition] = useState('Seleccionar Posicion');
  const [rarity, setRarity] = useState('Seleccionar Rareza');
  const [serie, setSerie] = useState('Seleccionar Serie');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const [card, setCard] = useState<CardAddType>();

  useEffect(() => {
    const getAll = () => {
      dispatch(GetTeams());
      dispatch(GetPositions());
      dispatch(GetSeries());
      dispatch(GetRarities());
    };
    getAll();
  }, [dispatch]);

  const teamsState = useSelector((state: RootStore) => state.cards.teams);
  const positionsState = useSelector(
    (state: RootStore) => state.cards.positions
  );
  const raritiesState = useSelector((state: RootStore) => state.cards.rarities);
  const seriesState = useSelector((state: RootStore) => state.cards.series);

  useEffect(() => {
    const postCard = {
      nombre: name.charAt(0).toUpperCase() + name.toLowerCase().slice(1),
      apellido:
        lastName.charAt(0).toUpperCase() + lastName.toLowerCase().slice(1),
      foto: `${name.toLowerCase()}-${lastName.toLowerCase()}.jpg`,
      id_equipos: parseInt(team),
      id_posiciones: parseInt(position),
      id_rarezas: parseInt(rarity),
      id_series: parseInt(serie),
    };

    const {
      nombre,
      apellido,
      foto,
      id_equipos,
      id_posiciones,
      id_rarezas,
      id_series,
    } = postCard;

    if (
      nombre !== '' &&
      apellido !== '' &&
      foto !== '-.jpg' &&
      !Number.isNaN(id_equipos) &&
      !Number.isNaN(id_posiciones) &&
      !Number.isNaN(id_rarezas) &&
      !Number.isNaN(id_series)
    ) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }

    setCard(postCard);
  }, [name, lastName, team, position, rarity, serie]);

  const handleClick = (event: React.MouseEvent) => {
    if (!!card) {
      dispatch(addCard(card));
    }
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
        <FormControl sx={{ width: '70%', my: 1 }}>
          <TextField
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
            label='Nombre'
            variant='standard'
          />
          <TextField
            required
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setLastName(e.target.value);
            }}
            label='Apellido'
            variant='standard'
          />
        </FormControl>
        <FormControl sx={{ width: '70%' }}>
          <Select
            required
            sx={{ my: 1 }}
            value={team}
            onChange={(e: SelectChangeEvent) => {
              setTeam(e.target.value);
            }}
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
            required
            sx={{ my: 1 }}
            value={position}
            onChange={(e: SelectChangeEvent) => {
              setPosition(e.target.value);
            }}
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
            required
            sx={{ my: 1 }}
            label='Seleccionar Rareza'
            value={rarity}
            onChange={(e: SelectChangeEvent) => {
              setRarity(e.target.value);
            }}
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
            required
            sx={{ my: 1 }}
            value={serie}
            onChange={(e: SelectChangeEvent) => {
              setSerie(e.target.value);
            }}
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
        {isComplete ? (
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
        ) : (
          <Button
            disabled
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
        )}
      </Box>
    </Box>
  );
}
