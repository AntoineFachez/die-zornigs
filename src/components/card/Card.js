import React from 'react';
import { Box } from '@mui/material';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

export default function Card({
  index,
  item,
  tileRefs,
  setTileRefs,
  activeTile,
}) {
  const even = index % 2 === 0;

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <Box
      key={index}
      id={`tile-${index}`}
      ref={(node) => setTileRefs(node, index)}
      // ref={tileRefs.current[index]}
      data-index={index}
      className="card-background"
      sx={{
        // transform:
        //   activeTile?.id === `tile-${index}` ? 'scale(1)' : 'scale(0.8)',
        position: 'relative',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        margin: '2rem 10%',
        // backgroundColor: '#dcc6b2',
        boxShadow: '-2px -2px 25px 5px #33343380',
      }}
    >
      <CardHeader index={index} item={item} activeTile={activeTile} />
      <CardBody
        index={index}
        item={item}
        activeTile={activeTile}
        even={even}
        handleClick={handleClick}
      />
    </Box>
  );
}
