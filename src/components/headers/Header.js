import { Box, Typography } from '@mui/material';
// import juliusFont from '../../assets/fonts/JuliusSansOne-Regular.ttf';
import React from 'react';
import '../../index.css';

export default function Header({ props }) {
  return (
    <Box sx={{ zIndex: 100, position: 'fixed', top: 0 }}>
      <Typography
        variant={props.variant}
        sx={{ fontFamily: 'Julius Sans One' }}
      >
        {props.data.mainHeader}
      </Typography>
    </Box>
  );
}
