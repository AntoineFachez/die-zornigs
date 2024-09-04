import React, { useContext } from 'react';
import { Box } from '@mui/material';
import PTBalanceContext from '../../context/PTBalanceContext';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import ListInSection from '../section/ListInSection';
import SingleImage from '../../widgets/unsplash/SingleImage';

export default function Card({
  props,
  index,
  item,
  activeTile,
  tileRefs,
  setTileRefs,
}) {
  const { setAppState, showForm, setShowForm, setLessonInFocus } =
    useContext(PTBalanceContext);
  const even = index % 2 === 0;

  const handleClick = () => {
    setLessonInFocus(item);
    setAppState('inquiry');
    setShowForm(!showForm);
  };
  const isActiveTile = activeTile?.id === `tile-${index}`;
  props.isActiveTile = isActiveTile;
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
        // height: '100%',
        height: 'fit-content',
        // height: !item.imageUrl ? 'fit-content' : '100%',

        // height: props.isPortrait ? '100%' : 'auto',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',

        // backgroundColor: '#dcc6b2',
        // boxShadow: '-2px -2px 25px 5px #33343380',
        margin: '0rem 0 3rem 0',
        // gap: '4rem',

        scrollSnapAlign: 'start',
        // scrollSnapStop: 'always',
        // scrollPaddingTop: 0,
        // scrollPaddingInlineStart: 0,
        scrollMargin: 0,
      }}
    >
      {/* <CardHeader
        props={props}
        index={index}
        item={item}
        activeTile={activeTile}
      />{' '} */}
      <CardBody
        props={props}
        index={index}
        item={item}
        activeTile={activeTile}
        even={even}
        handleClick={handleClick}
      />
    </Box>
  );
}
