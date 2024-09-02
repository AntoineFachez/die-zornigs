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
import UIContext from '../../context/UIContext';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Inquiery from './Inquiery';
import LandingPage from './landing-page/LandingPage';
import LogInOut from '../../auth/signUplogIn/Index';
import Main from './Main';
import NavTiles from '../../components/navTiles/NavTiles';
import SideBox from '../../components/sideBox/SideBox';

import {
  headerStyles,
  flexBoxStyles,
  footerStyles,
  appBodyStyles,
} from '../../theme/stylesData';
import '../../globalStyles.css';
import '../../components/card/card.css';
import '../../components/navTiles/nav-tiles.css';
import '../../components/sideBox/side-box.css';

export default function PTBalance() {
  const { deviceType, isPortrait } = useContext(AppContext);
  const { appState, showForm } = useContext(PTBalanceContext);
  const { showDrawer } = useContext(UIContext);
  const scrollableContainerRef = useRef(null);
  const tileRefs = useRef([]);
  // const scrollableContainerRef = useRef(null);
  // const tileRefs = useRef([]);
  const [activeTile, setActiveTile] = useState(null);
  const setTileRefs = useCallback((node, index) => {
    if (node !== null) {
      tileRefs.current[index] = { current: node };
    }
  }, []);

  // console.log(deviceType);
  if (deviceType === 'mobile') {
    // return null;
  } else if (deviceType === 'tablet') {
    // return null;
  } else if (deviceType === 'desktop') {
    // return null;
  }

  const props = { deviceType: deviceType, appState: appState, data: data };

  const visibleTileIndecies = useIntersectionObserver(tileRefs.current, {
    root: null,
    rootMargin: !isPortrait ? '0%' : '40%',
    threshold: !isPortrait ? 0.4 : 0.1,
  });

  const switchComponent = () => {
    switch (appState) {
      case 'landingPage':
        return <LandingPage props={props} />;
      case 'main':
        return (
          <Main
            props={props}
            setTileRefs={setTileRefs}
            scrollableContainerRef={scrollableContainerRef}
            visibleTileIndecies={visibleTileIndecies}
          />
        );
      case 'profile':
        return <LogInOut props={props} />;
      case 'inquiry':
        return (
          <Box sx={flexBoxStyles}>
            <Inquiery props={props} />
          </Box>
        );
      default:
        break;
    }
  };
  useEffect(() => {
    const observedActiveTileIndex = Math.min(...visibleTileIndecies);
    const observedActiveTile = document.querySelector(
      `#tile-${observedActiveTileIndex}`
    );
    setActiveTile(observedActiveTile);

    return () => {};
  }, [visibleTileIndecies]);
  return (
    <Box sx={{ ...appBodyStyles }}>
      <Header props={{ ...props, headerStyles: headerStyles }} />
      {showDrawer && (
        <NavTiles
          props={{
            data: data,
            deviceType: deviceType,
            isPortrait: isPortrait,
          }}
          scrollableContainerRef={scrollableContainerRef}
          tileRefs={tileRefs}
          activeTile={activeTile}
          setActiveTile={setActiveTile}
        />
      )}
      {/* <SideBox data={data} /> */}
      {switchComponent()}
      {props.deviceType === 'mobile' && (
        <Footer props={{ ...props, footerStyles: footerStyles }} />
      )}
    </Box>
  );
}
