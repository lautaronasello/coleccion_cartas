import { Autocomplete, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export default function Nav() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '4rem',
        display: 'flex',
        bgcolor: '#102578',
        alignItems: 'center',
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
        MLB - COLECCION
      </Box>
      <Autocomplete
        disablePortal
        id='cards-autocomplete'
        size='small'
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            color='warning'
            sx={{ bgcolor: '#fafafa' }}
            {...params}
            label='Player'
          />
        )}
      />
      <Button
        variant='contained'
        size='large'
        sx={{ bgcolor: '#d71b29', mx: '1rem' }}
      >
        Buscar
      </Button>
    </Box>
  );
}

const top100Films = [
  { label: 'Salvador Perez', year: 1994 },
  { label: 'Freddie Freeman', year: 1972 },
  { label: 'DJ LeMahieu', year: 1974 },
  { label: 'Manny Machado', year: 2008 },
];
