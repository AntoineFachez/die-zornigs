import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Header({ data }) {
  return (
    <Box sx={{ position: 'fixed', top: 0 }}>
      {/* <img
        style={{ width: '100%', height: '15rem', objectFit: 'contain' }}
        src={data.mainHeaderImageUrl}
        alt=""
      />{' '} */}

      <Typography variant="h2" sx={{}}>
        {data.mainHeader}
      </Typography>
    </Box>
  );
}
