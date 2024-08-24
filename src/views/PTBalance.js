import { Box, Typography } from '@mui/material';
import React from 'react';
import List from '../components/list/List';
import { data } from '../assets/data/mockData';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SideBox from '../components/sideBox/SideBox';

export default function PTBalance() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        // overflow: 'scroll',
        // overflow: 'hidden',
      }}
    >
      <Header data={data} />
      <Box sx={{ position: 'sticky', width: '100%', top: '0rem', right: 0 }}>
        <SideBox data={data} />
      </Box>
      <Box
        sx={{
          // height: '100%',
          color: 'white',
          // height: '100vh',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          paddingBottom: '4rem',
        }}
      >
        <List data={data} />
      </Box>
      <Footer data={data} />
    </Box>
  );
}
