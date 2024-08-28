import { Typography } from '@mui/material';
import React from 'react';

export default function CardHeader({ index, item, activeTile }) {
  return (
    <Typography
      // className="julius-sans-one-regular "
      variant="h4"
      sx={{
        zIndex: 10,
        position: 'sticky',
        width: '100%',
        top: '0px',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: item.imageUrl ? 'center' : 'center',
        color: 'black',
        borderRadius: '5px 5px 0 0',
        backgroundColor:
          activeTile?.id === `tile-${index}` ? '#dcc6b2' : '#33343360',
        // backgroundColor: '#dcc6b2',
        fontFamily: 'Julius Sans One',
      }}
    >
      {item.header}
    </Typography>
  );
}
