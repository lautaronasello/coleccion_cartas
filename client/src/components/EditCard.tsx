import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  SelectChangeEvent,
  Button,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCardAction } from '../actions/cardsActions';
import { RootStore } from '../store';
import { CardEditType, CardType } from '../types';

interface card {
  card: CardType;
}

export default function EditCard({ card }: card) {
  const dispatch = useDispatch();

  const [name, setName] = useState(card.nombre);
  const [lastName, setLastName] = useState(card.apellido);
  const [team, setTeam] = useState(card.equipo);
  const [position, setPosition] = useState(card.posicion);
  const [rarity, setRarity] = useState(card.rareza);
  const [serie, setSerie] = useState(card.serie);
  const [editCard, setEditCard] = useState<CardEditType>();

  const search = useSelector((state: RootStore) => state.cards.search);
  const teamsState = useSelector((state: RootStore) => state.cards.teams);
  const positionsState = useSelector(
    (state: RootStore) => state.cards.positions
  );
  const raritiesState = useSelector((state: RootStore) => state.cards.rarities);
  const seriesState = useSelector((state: RootStore) => state.cards.series);

  useEffect(() => {
    const putCard = {
      id: card.id,
      nombre: name.charAt(0).toUpperCase() + name.toLowerCase().slice(1),
      apellido:
        lastName.charAt(0).toUpperCase() + lastName.toLowerCase().slice(1),
      foto: `${name.toLowerCase()}-${lastName.toLowerCase()}.jpg`,
      id_equipos: parseInt(team),
      id_posiciones: parseInt(position),
      id_rarezas: parseInt(rarity),
      id_series: parseInt(serie),
    };

    setEditCard(putCard);
  }, [name, lastName, team, position, rarity, serie, card]);

  useEffect(() => {
    for (let i = 0; i < teamsState.length; i++) {
      if (card.equipo === teamsState[i].equipo) {
        setTeam(`${teamsState[i].id}`);
      }
    }
    for (let i = 0; i < positionsState.length; i++) {
      if (card.posicion === positionsState[i].posicion) {
        setPosition(`${positionsState[i].id}`);
      }
    }
    for (let i = 0; i < raritiesState.length; i++) {
      if (card.rareza === raritiesState[i].rareza) {
        setRarity(`${raritiesState[i].id}`);
      }
    }
    for (let i = 0; i < seriesState.length; i++) {
      if (card.serie === seriesState[i].serie) {
        setSerie(`${seriesState[i].id}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleClick = (event: React.MouseEvent) => {
    if (!!editCard) {
      dispatch(editCardAction(editCard));
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        bgcolor: '#fafafa',
        boxShadow: '0 5px 5px 0 rgba(0,0,0,0.5)',
        p: '1rem',
        m: '2rem',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ fontStyle: 'thin', fontSize: '2rem' }}>Editar producto</Box>
      <FormControl>
        <TextField
          sx={{ my: '1rem' }}
          placeholder={card.nombre}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
        />
        <TextField
          sx={{ mb: '1rem' }}
          placeholder={card.apellido}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setLastName(e.target.value);
          }}
        />
      </FormControl>
      <FormControl sx={{ mb: '1rem' }}>
        <Select
          value={team}
          onChange={(e: SelectChangeEvent) => {
            setTeam(e.target.value);
          }}
        >
          <MenuItem value={team}>{card.equipo}</MenuItem>
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
      <FormControl sx={{ mb: '1rem' }}>
        <Select
          value={position}
          onChange={(e: SelectChangeEvent) => {
            setPosition(e.target.value);
          }}
        >
          <MenuItem value={position}>{card.posicion}</MenuItem>
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
      <FormControl sx={{ mb: '1rem' }}>
        <Select
          value={rarity}
          onChange={(e: SelectChangeEvent) => {
            setRarity(e.target.value);
          }}
        >
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
      <FormControl sx={{ mb: '1rem' }}>
        <Select
          value={serie}
          onChange={(e: SelectChangeEvent) => {
            setSerie(e.target.value);
          }}
        >
          <MenuItem value={serie}>{card.serie}</MenuItem>
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
        Editar
      </Button>
    </Box>
  );
}
