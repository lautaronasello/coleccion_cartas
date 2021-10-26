import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../actions/cardsActions';

interface CardId {
  cardId: number;
}

export default function DeleteCard({ cardId }: CardId) {
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent) => {
    dispatch(deleteCard(cardId));
  };

  return (
    <Button
      onClick={handleClick}
      variant='outlined'
      color='error'
      sx={{ ml: '1rem' }}
    >
      Eliminar
    </Button>
  );
}
