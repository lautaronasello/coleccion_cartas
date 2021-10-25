import { AddRounded } from '@mui/icons-material';
import { Fab } from '@mui/material';
import { Link } from 'react-router-dom';

export default function AddBtn() {
  return (
    <Link to='/cards/add'>
      <Fab
        color='primary'
        sx={{
          position: 'fixed',
          right: '2rem',
          bottom: '2rem',
          width: '4rem',
          height: '4rem',
        }}
        aria-label='add-card'
      >
        <AddRounded />
      </Fab>
    </Link>
  );
}
