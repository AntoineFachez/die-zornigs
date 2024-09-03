import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Box, Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
export default function NavBar() {
  const { kid, setKid } = useContext(AppContext);
  return (
    <Box
      sx={{
        zIndex: 200,
        position: 'relative',
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // gap: 1,
      }}
    >
      {kid && (
        <IconButton
          onClick={() => setKid(null)}
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '1rem',
            color: 'white',
          }}
        >
          <Close />
        </IconButton>
      )}
      <Button
        sx={{
          zIndex: 100,
          width: 'fit-content',
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0.5rem 1rem 0.5rem 1rem',

          color: 'white',
          backgroundColor: kid === 'Viktor' ? '#4fc3f7' : '#333433',
          fontSize: '1.5rem',
          fontFamily: 'futura',
          '&:hover': { backgroundColor: '#4fc3f7' },
        }}
        onClick={() => setKid('Viktor')}
      >
        Viktor
      </Button>
      <Button
        sx={{
          zIndex: 100,
          width: 'fit-content',
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0.5rem 1rem 0.5rem 1rem',

          color: kid === '  Edgar' ? 'black' : 'white',
          backgroundColor: kid === '  Edgar' ? '#00ff00' : '#333433',

          fontSize: '1.5rem',
          fontFamily: 'futura',
          '&:hover': { color: 'black', backgroundColor: '#00ff00' },
        }}
        onClick={() => setKid('  Edgar')}
      >
        Edgar
      </Button>
    </Box>
  );
}
