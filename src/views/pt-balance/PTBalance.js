import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Box } from '@mui/material';

import { data } from '../../assets/data/pageData';

import AppContext from '../../context/AppContext';
import PTBalanceContext from '../../context/PTBalanceContext';
import UIContext from '../../context/UIContext';
import UserContext from '../../context/UserContext';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import DashBoard from '../../components/dash-board/DashBoard';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Inquiery from './form/Inquiery';
import LandingPage from './landing-page/LandingPage';
// import LogInOut from '../../auth/signUplogIn/Index';
// import Lessons from './lessons/Lessons';
import NavTiles from '../../components/navTiles/NavTiles';
import Sessions from './sessions/Sessions';
import SideBox from '../../components/sideBox/SideBox';
import UserAccount from './users/UserAccount';
import Users from './users/Users';

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
import List from '../../components/list/List';

export default function PTBalance() {
  const { deviceType, isPortrait } = useContext(AppContext);
  const { appState, showForm } = useContext(PTBalanceContext);
  const { showDrawer } = useContext(UIContext);
  const { user } = useContext(UserContext);
  const [activeComponent, setActiveComponent] = useState();

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

  const styledCard = isPortrait
    ? {
        // ...flexBoxStyles,
        height: '100vh',
        borderRadius: '5px',
        overflowX: 'hidden',
        // margin: `3rem 0 4rem 0`,
        // display: 'flex',

        // marginTop: '4rem',
        // padding: '4rem 0',
      }
    : {
        // ...flexBoxStyles,
        height: '100vh',
        borderRadius: '5px',
        overflowX: 'hidden',
        // marginTop: '4rem',
        // margin: `4rem 0 2rem 0`,
        // padding: '4rem 0',
      };
  const props = {
    deviceType: deviceType,
    appState: appState,
    tileRefs: tileRefs,
    setTileRefs: setTileRefs,
    activeTile: activeTile,
    setActiveTile: setActiveTile,
    scrollableContainerRef: scrollableContainerRef,
    isPortrait: isPortrait,
    style: styledCard,
  };

  const switchComponent = () => {
    switch (appState) {
      case 'landingPage':
        return (
          <List
            props={{
              ...props,
              amountTiles: data.landingPageSections.length,
              data: data.landingPageSections,
            }}
          />
        );
      case 'lessons':
        return (
          <List
            props={{
              ...props,
              amountTiles: data.lessons.length,
              data: data.lessons,
            }}
          />
        );
      case 'userProfile':
        return <UserAccount props={{ ...props, user: user }} />;
      case 'dashBoard':
        return <DashBoard props={props} />;
      case 'users':
        return <Users props={props} />;
      case 'sessions':
        return <Sessions props={props} />;
      case 'inquiry':
        return <Inquiery props={props} />;
      default:
        break;
    }
  };
  useEffect(() => {
    setActiveComponent(switchComponent());
    return () => {};
  }, [appState]);

  return (
    <Box sx={{ ...appBodyStyles }}>
      <Header props={{ ...props, data: data, headerStyles: headerStyles }} />
      {showDrawer && (
        <NavTiles
          props={{
            ...props,
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
      <Box
        sx={{
          ...flexBoxStyles,
          color: 'white',
          // backgroundColor: 'white',
          padding: '5rem 0',
        }}
      >
        {/* {switchComponent()} */}
        {activeComponent}
      </Box>
      {props.deviceType === 'mobile' && (
        <Footer props={{ ...props, footerStyles: footerStyles }} />
      )}
    </Box>
  );
}
