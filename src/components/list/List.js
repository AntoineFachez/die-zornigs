import { useEffect, useState } from 'react';
import Card from '../card/Card';
import { Box } from '@mui/material';
import './list.css';

export default function List({ props }) {
  const {
    data,
    isPortrait,
    scrollableContainerRef,
    setTileRefs,
    style,
    tileRefs,
    visibleTileIndecies,
  } = props;
  const amountTiles = data.length;
  const [tilesToRender, setTilesToRender] = useState(data);
  const [activeTile, setActiveTile] = useState(null);
  const highestVisibleTileIndex = Math.max(...visibleTileIndecies);

  const loadTilesToDisplay = () => {
    const observedActiveTileIndex = Math.min(...visibleTileIndecies);
    const observedActiveTile = document.querySelector(
      `#tile-${observedActiveTileIndex}`
    );

    setActiveTile(observedActiveTile);

    if (highestVisibleTileIndex + 1 === amountTiles) {
      console.log('scrollTriggered');
    } else if (highestVisibleTileIndex + 1 > amountTiles) {
    }
  };
  useEffect(() => {
    setTilesToRender(data);

    return () => {};
  }, [data]);

  useEffect(() => {
    loadTilesToDisplay();
  }, [visibleTileIndecies, data]);

  // useEffect(() => {
  // const observedActiveTileIndex = Math.min(...visibleTileIndecies);
  // const observedActiveTile = document.querySelector(
  //   `#tile-${observedActiveTileIndex}`
  // );
  // setActiveTile(observedActiveTile);

  // return () => {};
  // }, [visibleTileIndecies]);
  const list = (
    <Box className="scroll-container " ref={scrollableContainerRef} sx={style}>
      {tilesToRender?.map((item, i) => {
        return (
          <Card
            props={props}
            index={i}
            item={item}
            activeTile={activeTile}
            tileRefs={tileRefs}
            setTileRefs={setTileRefs}
          />
        );
      })}
    </Box>
  );
  return <>{list}</>;
}
