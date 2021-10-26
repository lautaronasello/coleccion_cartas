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
import { CardType } from '../types';

interface card {
  card: CardType;
}

export default function EditCard({ card }: card) {
  const dispatch = useDispatch();

  const [name, setName] = useState(card.nombre);
  const [lastName, setLastName] = useState(card.apellido);
  const [team, setTeam] = useState<any>(card.equipo);
  const [position, setPosition] = useState<any>(card.posicion);
  const [rarity, setRarity] = useState<any>(card.rareza);
  const [serie, setSerie] = useState<any>(card.serie);
  const [editCard, setEditCard] = useState<any>();

  const search = useSelector((state: RootStore) => state.cards.search);
  const teamsState = useSelector((state: RootStore) => state.cards.teams);
  const positionsState = useSelector(
    (state: RootStore) => state.cards.positions
  );
  const raritiesState = useSelector((state: RootStore) => state.cards.rarities);
  const seriesState = useSelector((state: RootStore) => state.cards.series);

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

  useEffect(() => {
    const putCard = {
      id: card.id,
      nombre: name.charAt(0).toUpperCase() + name.slice(1),
      apellido: lastName.charAt(0).toUpperCase() + lastName.slice(1),
      foto: `${name.toLowerCase()}-${lastName.toLowerCase()}.jpg`,
      id_equipos: team,
      id_posiciones: position,
      id_rarezas: rarity,
      id_series: serie,
    };

    setEditCard(putCard);
  }, [name, lastName, team, position, rarity, serie, card]);

  useEffect(() => {
    for (let i = 0; i < teamsState.length; i++) {
      if (card.equipo === teamsState[i].equipo) {
        setTeam(teamsState[i].id);
      }
    }
    for (let i = 0; i < positionsState.length; i++) {
      if (card.posicion === positionsState[i].posicion) {
        setPosition(positionsState[i].id);
      }
    }
    for (let i = 0; i < raritiesState.length; i++) {
      if (card.rareza === raritiesState[i].rareza) {
        setRarity(raritiesState[i].id);
      }
    }
    for (let i = 0; i < seriesState.length; i++) {
      if (card.serie === seriesState[i].serie) {
        setSerie(seriesState[i].id);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleClick = (event: React.MouseEvent) => {
    dispatch(editCardAction(editCard));
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
          onChange={handleChangeName}
        />
        <TextField
          sx={{ mb: '1rem' }}
          placeholder={card.apellido}
          onChange={handleChangeLastName}
        />
      </FormControl>
      <FormControl sx={{ mb: '1rem' }}>
        <Select value={team} onChange={handleChangeTeam}>
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
        <Select value={position} onChange={handleChangePosition}>
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
        <Select value={rarity} onChange={handleChangeRarity}>
          <MenuItem value={rarity}>{card.rareza}</MenuItem>
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
        <Select value={serie} onChange={handleChangeSerie}>
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
