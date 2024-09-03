import { Box } from '@mui/material';
import React from 'react';
import ButtonItem from '../button/Button';

export default function CardFooter({ handleClick }) {
  return (
    <Box
      sx={{
        // position: 'sticky',
        // top: '3rem',
        // position: 'absolute',
        // top: '50%',
        // bottom: '50%',
        width: '100%',
        // width: 'fit-content',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        // flexFlow: 'column nowrap',
        // marginTop: '2rem',
        padding: '0.2rem 0',
        backgroundColor: '#44434450',
        // backgroundColor: '#010123f2',
      }}
    >
      <ButtonItem
        handleClick={handleClick}
        textContent={'frag an'}
        sx={{ position: 'sticky', top: '3rem' }}
      />
    </Box>
  );
}
