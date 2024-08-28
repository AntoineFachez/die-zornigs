import React, { useRef, useCallback, useEffect, useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Card from '../card/Card';
import { Box } from '@mui/material';
import './list.css';
export default function List({
  data,
  scrollableContainerRef,
  tileRefs,
  setTileRefs,
  visibleTileIndecies,
  activeTile,
}) {
  const amountTiles = data.tiles.length;
  const [tilesToRender, setTilesToRender] = useState(data.tiles);

  const highestVisibleTileIndex = Math.max(...visibleTileIndecies);
  const loadTilesToDisplay = () => {
    if (highestVisibleTileIndex + 1 === amountTiles) {
      // console.log('scrollTriggered');
    } else if (highestVisibleTileIndex + 1 > amountTiles) {
    }
  };
  useEffect(() => {
    loadTilesToDisplay();
  }, [visibleTileIndecies]);

  const list = (
    <Box
      className="scroll-container "
      ref={scrollableContainerRef}
      sx={{
        height: '100vh',
        // display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'auto',
        // marginTop: '4rem',
        borderRadius: '5px',
        margin: '4rem 0 8rem 0',
        overflowX: 'hidden',
        // padding: '4rem 0',
      }}
    >
      {tilesToRender?.map((item, i) => {
        return (
          <Card
            index={i}
            item={item}
            tileRefs={tileRefs}
            setTileRefs={setTileRefs}
            activeTile={activeTile}
          />
        );
      })}
    </Box>
  );
  return <>{list}</>;
}
