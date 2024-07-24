import { Box } from '@mui/material';
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Viktor from './Viktor';
import Edgar from './Edgar';
import Fireworks from '../widgets/p5/sketches/fireworks/Index';
import hamburgSilouhette from '../assets/images/hamburg-skyline-panorama-silouhette.png';
import hamburgReflection from '../assets/images/hamburg-skyline-panorama-reflection.png';

export default function Kids() {
  const { kid, setKid } = useContext(AppContext);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            zIndex: 100,
            width: '100%',
            height: 'fit-content',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#4fc3f7',
            color: 'white',
            fontSize: '4rem',
          }}
          onClick={() => setKid('Viktor')}
        >
          Viktor
        </Box>
        <Box
          sx={{
            zIndex: 100,
            width: '100%',
            height: 'fit-content',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00ff00',
            color: 'black',
            fontSize: '4rem',
          }}
          onClick={() => setKid('  Edgar')}
        >
          Edgar
        </Box>
      </Box>
      {kid === 'Viktor' ? <Viktor /> : <Edgar />}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 1,
          // backgroundColor: 'black',
        }}
      >
        <Fireworks />
      </Box>
      <Box sx={{ position: 'absolute', height: 'fit-content', bottom: 0 }}>
        <Box sx={{ position: 'absolute', height: 'fit-content', bottom: 0 }}>
          <img
            src={hamburgSilouhette}
            style={{
              // position: 'absolute',
              zIndex: 0,
              bottom: 0,
              left: 0,
              width: '100%',
              height: 'fit-content',
              objectFit: 'contain',
              backgroundColor: 'transparent',
            }}
            alt="hamburg reflection"
            draggable="false"
          />
        </Box>
        <Box sx={{ position: 'relative', height: 'fit-content', bottom: 0 }}>
          <img
            src={hamburgReflection}
            style={{
              // position: 'absolute',
              zIndex: 0,
              bottom: 0,
              left: 0,
              width: '100%',
              height: 'fit-content',
              objectFit: 'contain',
              backgroundColor: 'transparent',
            }}
            alt="hamburg reflection"
            draggable="false"
          />
        </Box>
      </Box>
    </Box>
  );
}
