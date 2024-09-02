import { Box, Button } from '@mui/material';
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Viktor from '../Viktor';
import Edgar from './Edgar';
import Fireworks from '../../widgets/p5/sketches/fireworks/Index';
import Footer from '../Footer';

import birthdayTable from '../assets/images/IMG_0427.jpg';
import Index from '../../widgets/p5/sketches/magnifier/Index';
import NavBar from '../NavBar';
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
        backgroundColor: '#333433',
        overflow: 'hidden',
      }}
    >
      <NavBar />
      {kid === null ? (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#4fc3f7',
            backgroundImage: `linear-gradient(to top, #333, #111)`,
            color: 'white',
            fontSize: '4rem',
          }}
        >
          {/* <Index image={birthdayTable} /> */}
        </Box>
      ) : kid === 'Viktor' ? (
        <Viktor bgImg={birthdayTable} />
      ) : (
        <Edgar />
      )}
      <Box
        sx={{
          zIndex: 50,
          width: '100%',
          height: '100%',
          position: 'absolute',

          // backgroundColor: 'black',
        }}
      >
        <Fireworks />
      </Box>{' '}
      {kid && <Footer />}
    </Box>
  );
}
