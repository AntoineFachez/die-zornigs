import { Box } from '@mui/material';
import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import PTBalanceContext from '../../context/PTBalanceContext';

export default function NavTiles({
  props,
  // data,
  scrollableContainerRef,
  tileRefs,
  activeTile,
  setActiveTile,
}) {
  const { setAppState, sessionInFocus, setLessonInFocus } =
    useContext(PTBalanceContext);
  const [tileRefsReady, setTileRefsReady] = useState(false);

  useEffect(() => {
    tileRefs.current = Array(props.data.lessons.length)
      .fill()
      .map((_, i) => tileRefs.current[i] || createRef());
    setTileRefsReady(true);
  }, [props.data.lessons]);

  const handleClick = (item, index) => {
    setAppState('main');
    if (
      tileRefsReady &&
      tileRefs.current[index] &&
      tileRefs.current[index].current &&
      scrollableContainerRef.current // Make sure the ref is valid
    ) {
      setActiveTile(tileRefs.current[index].current);
      // Scroll the scrollable container to the target element
      scrollableContainerRef.current.scrollTo({
        top: props.isPortrait
          ? tileRefs.current[index].current.offsetTop -
            tileRefs.current[index].current.offsetHeight
          : tileRefs.current[index].current.offsetTop,
        behavior: 'smooth',
      });
    }
    setLessonInFocus(item);
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
    <Box
      className={
        props.isPortrait ? 'nav-tiles-portrait' : 'nav-tiles-landscape'
      }
      sx={
        props.isPortrait
          ? {
              zIndex: 100,
              position: 'fixed',
              bottom: 0,
              width: '160px',
              display: 'flex',
              flexFlow: 'column nowrap',
              padding: '1rem 0 1rem 1rem',
            }
          : {
              zIndex: 100,
              position: 'fixed',
              top: '50%',
              left: 0,
              width: '160px',
              display: 'flex',
              flexFlow: 'column nowrap',
              padding: '1rem 0 1rem 1rem',
            }
      }
    >
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
        {props.data.lessons.map((item, i) => (
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
            onClick={() => handleClick(item, i)} // Call handleClick on click
            // ref={tileRefs.current[i]}
          >
            {item.headerShort}
          </div>
        ))}
      </nav>{' '}
    </Box>
  );
}
