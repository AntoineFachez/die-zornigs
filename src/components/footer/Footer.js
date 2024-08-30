import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Footer({ data }) {
  return (
    <Box
      sx={{
        zIndex: 100,
        position: 'fixed',
        bottom: 0,
        height: '3rem',
        display: 'flex',
        flexFlow: 'column nowrap',
      }}
    >
      hello world
    </Box>
  );
}
