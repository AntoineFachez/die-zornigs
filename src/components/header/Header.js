import { Box, Typography } from '@mui/material';
// import juliusFont from '../../assets/fonts/JuliusSansOne-Regular.ttf';
import React from 'react';
import '../../index.css';

export default function Header({ data }) {
  return (
    <Box sx={{ zIndex: 100, position: 'fixed', top: 0 }}>
      <Typography
        variant="h2"
        sx={{ fontFamily: 'Julius Sans One' }}
        // className="julius-sans-one-regular"
      >
        {data.mainHeader}
      </Typography>
    </Box>
  );
}
