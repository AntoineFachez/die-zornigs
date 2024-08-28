import React, { useContext } from 'react';
import { Box } from '@mui/material';
import ButtonItem from '../button/Button';

export default function CardAction({ handleClick }) {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: '50%',
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        padding: '3rem 0',
        alignContent: 'center',
        backgroundColor: '#01012320',
      }}
    >
      <ButtonItem handleClick={handleClick} textContent={'frag an'} />
    </Box>
  );
}
