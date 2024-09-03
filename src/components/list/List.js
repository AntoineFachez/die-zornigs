import { useEffect, useState } from 'react';
import Card from '../card/Card';
import { Box } from '@mui/material';
import './list.css';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
export default function List({ props }) {
  const {
    data,
    isPortrait,
    scrollableContainerRef,
    setTileRefs,
    style,
    tileRefs,
  } = props;
  const amountTiles = data.length;
  const [tilesToRender, setTilesToRender] = useState(data);
  const [activeTile, setActiveTile] = useState(null);

  const visibleTileIndecies = useIntersectionObserver(
    tileRefs.current,
    // setActiveTile,
    {
      root: null,
      rootMargin: !isPortrait ? '0%' : '40%',
      threshold: !isPortrait ? 0.4 : 0.1,
    }
  );
  const highestVisibleTileIndex = Math.max(...visibleTileIndecies);

  const loadTilesToDisplay = () => {
    const observedActiveTileIndex = Math.min(...visibleTileIndecies);
    const observedActiveTile = document.querySelector(
      `#tile-${observedActiveTileIndex}`
    );

    setActiveTile(observedActiveTile);
    console.log(observedActiveTile);

    if (highestVisibleTileIndex + 1 === amountTiles) {
      console.log('scrollTriggered');
    } else if (highestVisibleTileIndex + 1 > amountTiles) {
    }
  };

  useEffect(() => {
    console.log(tileRefs.current);

    return () => {};
  }, [tileRefs.current]);

  useEffect(() => {
    setTilesToRender(data);
    loadTilesToDisplay();
  }, [data]);

  useEffect(() => {
    const observedActiveTileIndex = Math.min(...visibleTileIndecies);
    const observedActiveTile = document.querySelector(
      `#tile-${observedActiveTileIndex}`
    );
    setActiveTile(observedActiveTile);
    // console.log(observedActiveTile);
    return () => {};
  }, [visibleTileIndecies]);
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
