import {
  FormControl,
  MenuItem,
  Select,
  TextField,
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

  const [name, setName] = useState(card.cartas.nombre);
  const [lastName, setLastName] = useState(card.cartas.apellido);
  const [team, setTeam] = useState<number>(card.equipos.id);
  const [position, setPosition] = useState(card.posiciones.id);
  const [rarity, setRarity] = useState(card.rarezas.id);
  const [serie, setSerie] = useState(card.series.id);
  const [editCard, setEditCard] = useState<CardEditType>();

  const teamsState = useSelector((state: RootStore) => state.cards.teams);
  const positionsState = useSelector(
    (state: RootStore) => state.cards.positions
  );
  const raritiesState = useSelector((state: RootStore) => state.cards.rarities);
  const seriesState = useSelector((state: RootStore) => state.cards.series);

  useEffect(() => {
    const putCard = {
      id: card.cartas.id,
      nombre: name.charAt(0).toUpperCase() + name.toLowerCase().slice(1),
      apellido:
        lastName.charAt(0).toUpperCase() + lastName.toLowerCase().slice(1),
      foto: `${name.toLowerCase()}-${lastName.toLowerCase()}.jpg`,
      id_equipos: team,
      id_posiciones: position,
      id_rarezas: rarity,
      id_series: serie,
    };

    setEditCard(putCard);
  }, [name, lastName, team, position, rarity, serie, card]);

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
          placeholder={card.cartas.nombre}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
        />
        <TextField
          sx={{ mb: '1rem' }}
          placeholder={card.cartas.apellido}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setLastName(e.target.value);
          }}
        />
      </FormControl>
      <FormControl sx={{ mb: '1rem' }}>
        <Select
          value={team}
          onChange={(e: any) => {
            setTeam(e.target.value);
          }}
        >
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
          onChange={(e: any) => {
            setPosition(e.target.value);
          }}
        >
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
          onChange={(e: any) => {
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
          onChange={(e: any) => {
            setSerie(e.target.value);
          }}
        >
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
