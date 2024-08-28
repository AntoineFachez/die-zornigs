import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
} from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { data } from '../assets/data/mockData';
import PTBalanceContext from '../context/PTBalanceContext';
import List from '../components/list/List';
import Form from '../components/form/Form';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SideBox from '../components/sideBox/SideBox';
import NavTiles from '../components/navTiles/NavTiles';

import '../globalStyles.css';
import '../components/card/card.css';
import '../components/navTiles/nav-tiles.css';
import '../components/sideBox/side-box.css';
import Inquiery from './Inquiery';

export default function PTBalance() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 769px) and (max-width: 1024px)',
  });

  const { showForm, setShowForm, lessonInFocus } = useContext(PTBalanceContext);
  console.log(isMobile, isTablet);

  const scrollableContainerRef = useRef(null);
  const tileRefs = useRef([]);
  const [activeTile, setActiveTile] = useState(null);
  // console.log(activeTile);
  const setTileRefs = useCallback((node, index) => {
    if (node !== null) {
      tileRefs.current[index] = { current: node };
    }
  }, []);

  const visibleTileIndecies = useIntersectionObserver(tileRefs.current, {
    root: null,
    rootMargin: '10%',
    threshold: 0.4,
  });

  useEffect(() => {
    const observedActiveTileIndex = Math.max(...visibleTileIndecies);
    // console.log(observedActiveTileIndex);
    const observedActiveTile = document.querySelector(
      `#tile-${observedActiveTileIndex}`
    );
    // console.log(tileRefs.current[observedActiveTileIndex]);
    setActiveTile(observedActiveTile);

    return () => {};
  }, [visibleTileIndecies]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <Header data={data} />
      <Box
        className="nav-tiles"
        sx={{
          zIndex: 100,
          position: 'fixed',
          // top: '50%',
          // bottom: '50%',
          left: 0,
          width: '160px',
          display: 'flex',
          flexFlow: 'column nowrap',
          padding: '1rem 0 1rem 1rem',
        }}
      >
        <NavTiles
          data={data}
          scrollableContainerRef={scrollableContainerRef}
          tileRefs={tileRefs}
          activeTile={activeTile}
          setActiveTile={setActiveTile}
        />
        {/* <SideBox data={data} /> */}
      </Box>
      {showForm ? (
        <Inquiery />
      ) : (
        data.tiles && (
          <List
            data={data}
            visibleTileIndecies={visibleTileIndecies}
            scrollableContainerRef={scrollableContainerRef}
            activeTile={activeTile}
            tileRefs={tileRefs}
            setTileRefs={setTileRefs}
          />
        )
      )}
      {/* <Box
        className="side-box"
        sx={{
          zIndex: 100,
          position: 'fixed',
          right: 0,
          height: '3rem',
          display: 'flex',
          flexFlow: 'column nowrap',
        }}
      >
        <Footer data={data} />
      </Box> */}
    </Box>
  );
}
