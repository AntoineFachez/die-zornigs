import React, { createRef, useEffect, useRef, useState } from 'react';

export default function NavTiles({
  data,
  scrollableContainerRef,
  tileRefs,
  activeTile,
  setActiveTile,
}) {
  const [tileRefsReady, setTileRefsReady] = useState(false);

  useEffect(() => {
    tileRefs.current = Array(data.tiles.length)
      .fill()
      .map((_, i) => tileRefs.current[i] || createRef());
    setTileRefsReady(true);
  }, [data.tiles]);

  const handleClick = (index) => {
    if (
      tileRefsReady &&
      tileRefs.current[index] &&
      tileRefs.current[index].current &&
      scrollableContainerRef.current // Make sure the ref is valid
    ) {
      setActiveTile(tileRefs.current[index].current);
      // Scroll the scrollable container to the target element
      scrollableContainerRef.current.scrollTo({
        top: tileRefs.current[index].current.offsetTop - 150, // Scroll to the top of the target element

        behavior: 'smooth',
      });
    }
  };
  const areTileRefsReady = () => {
    return tileRefs.current.every((ref) => ref.current !== null);
  };

  useEffect(() => {
    // Check if all refs are assigned after each render
    if (areTileRefsReady()) {
      setTileRefsReady(true);
    }
  });

  return (
    <nav
      style={{
        // width: '160px',
        width: '100%',
        // width: 'inherit',
        height: 'auto',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        // flexFlow: 'column nowrap',
        borderRadius: '5px',
        padding: '0.5rem 0 0.5rem 0',

        backgroundColor: '#333433f2',
        gap: '1rem',
        // scrollMarginTop: '60px',
      }}
    >
      {' '}
      {data.tiles.map((item, i) => (
        <div
          className="nav-tiles_anchors reddit-sans-thin"
          key={i}
          // href={`#tile-${i}`} // Add an ID to each tile for linking
          style={{
            color: '#fff',
            backgroundColor:
              activeTile?.id === `tile-${i}` ? '#dcc6b2' : '#000',
            padding: '0.2rem',
            cursor: 'pointer',
            fontFamily: 'Reddit Sans',
          }}
          onClick={() => handleClick(i)} // Call handleClick on click
          // ref={tileRefs.current[i]}
        >
          {item.headerShort}
        </div>
      ))}
    </nav>
  );
}
