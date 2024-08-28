import React, { useContext } from 'react';
import { Box } from '@mui/material';
import PTBalanceContext from '../../context/PTBalanceContext';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

export default function Card({
  index,
  item,
  tileRefs,
  setTileRefs,
  activeTile,
}) {
  const { showForm, setShowForm, setLessonInFocus } =
    useContext(PTBalanceContext);
  const even = index % 2 === 0;

  const handleClick = () => {
    setLessonInFocus(item);
    setShowForm(!showForm);
  };

  return (
    <Box
      key={index}
      id={`tile-${index}`}
      ref={(node) => setTileRefs(node, index)}
      // ref={tileRefs.current[index]}
      data-index={index}
      className={`card-background`}
      sx={{
        // transform:
        //   activeTile?.id === `tile-${index}` ? 'scale(1)' : 'scale(0.8)',
        position: 'relative',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',

        // backgroundColor: '#dcc6b2',
        boxShadow: '-2px -2px 25px 5px #33343380',
        margin: '0rem 0 3rem 0',
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
