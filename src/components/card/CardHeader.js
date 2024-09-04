import { Typography } from '@mui/material';
import React from 'react';
import './card.css';
export default function CardHeader({ props, index, item, activeTile }) {
  const isActiveTile = activeTile?.id === `tile-${index}`;

  return (
    <Typography
      className={isActiveTile ? 'active-tile-header' : 'inactive-tile-header '}
      variant={props.isPortrait ? 'h5' : 'h4'}
      sx={{
        zIndex: 10,
        position: 'sticky',
        top: '-5px',
        width: '100%',
        // maxHeight: '30rem',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: item.imageUrl ? 'center' : 'center',

        // color: isActiveTile ? 'white' : 'black',
        // backgroundColor: isActiveTile ? '#dcc6b2' : '#33343360',
        // backgroundColor: '#dcc6b2',
        fontFamily: 'Julius Sans One',
        // fontWeight: isActiveTile ? 'bold' : 'normal',
        // fontSize: activeTile?.id === `tile-${index}` ? '1.5rem' : '1.2rem',
        padding: props.isPortrait ? '0.5rem 0' : '1rem 0',
        // borderRadius: '5px 5px 0 0',
        // boxShadow: '-2px -2px 25px 5px #33343320',
        // border: 'solid 1px #555',
        // border: 'solid 1px #555',
      }}
    >
      {item.header}
    </Typography>
  );
}
