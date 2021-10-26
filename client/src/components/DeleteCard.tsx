import { Button } from '@mui/material';

interface CardId {
  cardId: number;
}

export default function DeleteCard({ cardId }: CardId) {
  return (
    <Button variant='outlined' color='error' sx={{ ml: '1rem' }}>
      Eliminar
    </Button>
  );
}
