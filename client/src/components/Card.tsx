import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCardByName } from '../actions/cardsActions';
import { RootStore } from '../store';

interface DataInterface {
  id: number;
  nombre: string;
  apellido: string;
  equipo: string;
  foto: string;
  posicion: string;
  rareza: string;
  serie: string;
}

export default function CardHome({
  nombre,
  apellido,
  posicion,
  foto,
  equipo,
  rareza,
  serie,
}: DataInterface) {
  const dispatch = useDispatch();

  const [colorRarity, setColorRarity] = useState('#f5e88f');
  const [colorBgName, setColorBgName] = useState('#ecc567');
  switch (rareza) {
    case 'oro':
      setColorRarity('#f5e88f');
      setColorBgName('#ecc567');
      break;

    case 'plata':
      setColorRarity('#dedede');
      setColorBgName('#bcc9d1');
      break;

    case 'bronze':
      setColorRarity('#edb97f');
      setColorBgName('#df9a65');
      break;
    default:
      break;
  }

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(GetCardByName(nombre));
  };

  const cardSearch = useSelector((state: RootStore) => state.cards.search);

  return (
    <Box
      onClick={handleClick}
      className='boxCards'
      sx={{
        m: '1rem',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 1px 1px 0 rgb(0,0,0,0.1)',
        borderRadius: '12px',
        bgcolor: colorRarity,
        alignItems: 'center',
        height: '25rem',
        width: '18rem',
        '&:hover': {
          boxShadow: '0 10px 15px 0 rgb(0,0,0,0.5)',
          cursor: cardSearch ? 'default' : 'pointer',
        },
      }}
    >
      <Box
        component='img'
        sx={{ height: '12rem', width: '15rem', border: 1, mt: '1rem' }}
        alt={`${nombre} ${apellido} - ${posicion}`}
        src={foto}
      />
      <Box
        component='span'
        sx={{
          bgcolor: colorBgName,
          width: '100%',
          fontSize: 25,
          mt: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '3rem',
        }}
      >
        {nombre} {apellido} - {posicion}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          my: 'auto',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          Equipo:
          <Box sx={{ fontSize: '1rem', fontWeight: 'bold', ml: '3px' }}>
            {equipo}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          Serie:
          <Box sx={{ fontSize: '1rem', fontWeight: 'bold', ml: '3px' }}>
            {serie}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
