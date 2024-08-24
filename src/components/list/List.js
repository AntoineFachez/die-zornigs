import React from 'react';
import { Box, Typography } from '@mui/material';
import Card from '../card/Card';

export default function List({ data }) {
  return (
    <Box
      sx={{
        width: '100%',
        // height: '100%',
        height: '100vh',
        // display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'scroll',
        // overflow: 'hidden',
        // marginTop: '8rem',
        gap: '1rem',
        padding: '2rem',
        marginTop: '4rem',
      }}
    >
      {data.tiles.map((item, i) => {
        console.log(item.imageUrl);
        return <Card item={item} i={i} />;
      })}
    </Box>
  );
}
