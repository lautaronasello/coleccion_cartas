import { Autocomplete, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCardByName } from '../actions/cardsActions';
import { Link } from 'react-router-dom';
// import { RootStore } from '../store';

export default function Nav() {
  const dispatch = useDispatch();

  const [cardNameSearch, setCardNameSearch] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardNameSearch(event.target.value);
  };

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(GetCardByName(cardNameSearch));
  };

  // const cardsState = useSelector((state: RootStore) => state.cards.cards);

  // const namesCards = cardsState.map((data) => {
  //   return [`${data.nombre}`];
  // });

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '4rem',
        display: 'flex',
        bgcolor: '#102578',
        alignItems: 'center',
        position: 'sticky',
        top: '0',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          color: 'white',
          fontStyle: 'bold',
          fontSize: '2rem',
          mx: '1rem',
        }}
      >
        <Link style={{ color: 'white', textDecoration: 'none' }} to='/'>
          MLB - COLECCION
        </Link>
      </Box>
      <Autocomplete
        disablePortal
        id='cards-autocomplete'
        size='small'
        options={namesCards}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            onChange={handleChange}
            value={cardNameSearch}
            sx={{ bgcolor: '#fafafa', borderRadius: 1 }}
            {...params}
            label='Player'
          />
        )}
      />
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
        Buscar
      </Button>
    </Box>
  );
}

const namesCards = [
  { label: 'Salvador' },
  { label: 'Freddie' },
  { label: 'Manny' },
  { label: 'Fernando' },
  { label: 'tatis' },
  { label: 'DJ' },
];
