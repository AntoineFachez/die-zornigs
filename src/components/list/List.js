import React, { useRef, useCallback, useEffect, useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Card from '../card/Card';

export default function List({
  data,
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
      console.log('scrollTriggered');
    } else if (highestVisibleTileIndex + 1 > amountTiles) {
    }
  };
  useEffect(() => {
    loadTilesToDisplay();
  }, [visibleTileIndecies]);

  const list = (
    <>
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
    </>
  );
  return <>{list}</>;
}
