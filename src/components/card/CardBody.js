import React from 'react';
import { Box } from '@mui/material';
import CardText from './CardText';
import CardAction from './CardAction';

export default function CardBody({
  index,
  item,
  activeTile,
  even,
  handleClick,
}) {
  return (
    <Box
      className={`${
        activeTile?.id === `tile-${index}` ? 'active-tile' : 'inactive-tile'
      }`}
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: even ? 'row nowrap' : 'row-reverse nowrap',
        borderRadius: '5px',
        backgroundColor:
          activeTile?.id === `tile-${index}` ? '#dcc6b2' : '#33343360',
      }}
    >
      <CardText item={item} even={even} />
      <Box sx={{ position: 'sticky', top: '0rem', height: '100%' }}>
        <Box
          sx={{
            zIndex: 100,
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <CardAction handleClick={handleClick} even={even} />
        </Box>
        <img
          style={{
            width: '100%',
            height: '100%',
            maxHeight: '35rem',
            objectFit: 'cover',
            borderRadius: even ? '0 0 5px 0 ' : '0 0 0 5px',
          }}
          src={item.imageUrl}
          alt={item?.imageAlt}
        />
      </Box>
    </Box>
  );
}
