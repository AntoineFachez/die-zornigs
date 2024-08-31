import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
} from 'react';
import { Box } from '@mui/material';

import { data } from '../../assets/data/mockData';

import AppContext from '../../context/AppContext';
import PTBalanceContext from '../../context/PTBalanceContext';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import Form from '../../components/form/Form';
import Footer from '../../components/footer/Footer';
import Header from '../../components/headers/Header';
import Inquiery from './Inquiery';
import List from '../../components/list/List';
import NavTiles from '../../components/navTiles/NavTiles';
import SideBox from '../../components/sideBox/SideBox';

import '../../globalStyles.css';
import '../../components/card/card.css';
import '../../components/navTiles/nav-tiles.css';
import '../../components/sideBox/side-box.css';
import LandingPage from './LandingPage';
import Main from './Main';

export default function PTBalance() {
  const { deviceType, isPortrait } = useContext(AppContext);
  const { appState, showForm } = useContext(PTBalanceContext);

  const scrollableContainerRef = useRef(null);
  const tileRefs = useRef([]);
  const [activeTile, setActiveTile] = useState(null);
  const setTileRefs = useCallback((node, index) => {
    if (node !== null) {
      tileRefs.current[index] = { current: node };
    }
  }, []);

  const visibleTileIndecies = useIntersectionObserver(tileRefs.current, {
    root: null,
    rootMargin: '0%',
    threshold: 0.4,
  });

  useEffect(() => {
    const observedActiveTileIndex = Math.max(...visibleTileIndecies);
    const observedActiveTile = document.querySelector(
      `#tile-${observedActiveTileIndex}`
    );
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
      <Header
        props={{ data: data, variant: isPortrait ? 'h3' : 'h2' }}
        // data={data}
      />{' '}
      <NavTiles
        props={{
          data: data,
          isPortrait: isPortrait,
          style: isPortrait
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
                left: 0,
                width: '160px',
                display: 'flex',
                flexFlow: 'column nowrap',
                padding: '1rem 0 1rem 1rem',
              },
        }}
        // data={data}
        scrollableContainerRef={scrollableContainerRef}
        tileRefs={tileRefs}
        activeTile={activeTile}
        setActiveTile={setActiveTile}
      />
      {/* <SideBox data={data} /> */}
      {appState === 'landingPage' ? <LandingPage /> : <Main />}
      {showForm && (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Inquiery />
        </Box>
      )}
      {isPortrait && <Footer data={data} />}
    </Box>
  );
}
