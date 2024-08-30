import React, { useRef, useCallback, useEffect, useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Card from '../card/Card';
import { Box } from '@mui/material';
import './list.css';
export default function List({
  props,
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
      sx={props.style}
    >
      {tilesToRender?.map((item, i) => {
        return (
          <Card
            props={props}
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
