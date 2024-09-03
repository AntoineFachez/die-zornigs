import React, { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import AppContext from './AppContext';
// import { styledComponent } from "../themes/styledComponent";
// import {
//   viewerGridMap,
//   creatorGridMap,
//   researcherGridMap,
//   tableAnalyzerGridMap,
//   textAnalyzerGridMap,
//   standAloneWidget,
// } from '../views/grid/defaultGridMaps';

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const { appContext, selectedStory } = useContext(AppContext);
  const [intro, setIntro] = useState(false);
  const [userRole, setUserRole] = useState('viewer');
  const [homeUiSelected, setHomeUiSelected] = useState('locations');

  const [appBackgroundColor, setAppBackgroundColor] = useState();
  // styledComponent?.fullBody
  const [appBackgroundEffect, setAppBackgroundEffect] = useState('');
  const navBarHeight = '3rem';
  //TODO: do not pass the "mainHeight"-function but pass a calculated
  //TODO  result based on the actual available space:
  const mainHeight = `calc(100% - ${navBarHeight})`;

  // const [domContext, setDomContext] = useState(
  //   userRole === 'viewer'
  //     ? viewerGridMap
  //     : userRole === 'creator'
  //     ? creatorGridMap
  //     : userRole === 'researcher'
  //     ? researcherGridMap
  //     : userRole === 'textAnalyzer'
  //     ? researcherGridMap
  //     : userRole === 'tableAnalyzer'
  //     ? tableAnalyzerGridMap
  //     : userRole === 'dev'
  //     ? standAloneWidget
  //     : standAloneWidget
  // );
  // console.log('userRole', userRole);
  // const [gridDOMMap, setGridDOMMap] = useState(domContext);
  const [activeSpaces, setActiveSpaces] = useState([]);
  const [columns, setColumns] = useState(3);
  const [rows, setRows] = useState(2);

  const [showDrawer, setShowDrawer] = useState(false);
  const [orientationDrawer, setOrientationDrawer] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [showPaneMenu, setShowPaneMenu] = useState(false);
  const [widgetMenuHeight, setWidgetMenuHeight] = useState('3rem');
  const [mainPaneWidth, setMainPaneWidth] = useState(
    appContext === 'home' ? '25' : appContext === 'watchVideo' ? '30' : '90'
  );
  const [mainPaneHeight, setMainPaneHeight] = useState(
    appContext === 'home' ? '60' : appContext === 'watchVideo' ? '60' : '90'
  );
  const [floorPaneHeight, setFloorPaneHeight] = useState(
    appContext === 'home' ? '25' : appContext === 'watchVideo' ? '40' : '75'
  );
  const [threePaneWidthLeft, setThreePaneWidthLeft] = useState('75');
  // const [threePaneWidthRight, setThreePaneWidthRight] = useState(
  //   threePaneWidthLeft * -0.5,
  // );
  const [threePaneWidthRight, setThreePaneWidthRight] = useState('75');
  const [paneWidth, setPaneWidth] = useState('25');
  const [paneHeight, setPaneHeight] = useState('25');
  const [paneWidth50, setPaneWidth50] = useState('50');
  const [paneHeight100, setPaneHeight100] = useState('50');

  const [showNewItem, setShowNewItem] = useState(false);

  //TODO: rename all instances "showVideoMenu" & "setShowVideoMenu" related to "mediaPlayerMenu"
  const [showVideoMenu, setShowVideoMenu] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [paused, setPaused] = useState(true);
  const [showNewMarker, setShowNewMarker] = useState(false);
  const [intervalId, setIntervalId] = useState([]);

  const [showCalendarMenu, setShowCalendarMenu] = useState(false);
  const [showEventsMenu, setShowEventsMenu] = useState(false);
  const [showGlobeMenu, setShowGlobeMenu] = useState(false);
  const [showPersonsMenu, setShowPersonsMenu] = useState(false);
  const [showPropmtsMenu, setShowPropmtsMenu] = useState(false);
  const [showStoriesMenu, setShowStoriesMenu] = useState(false);
  const [showVideosMenu, setShowVideosMenu] = useState(false);
  const [showWikipediaMenu, setShowWikipediaMenu] = useState(false);

  const [toggleHistogramCalendar, setToggleHistogramCalendar] =
    useState('calendar');

  const [toggleGlobeGoogleMaps, setToggleGlobeGoogleMaps] = useState('globe');
  const [showGlobeNature, setShowGlobeNature] = useState(true);
  const [showGlobeAnimations, setShowGlobeAnimations] = useState(true);
  const [showArcsData, setShowArcsData] = useState(false);
  const [showPointsData, setShowPointsData] = useState(true);
  const [showLabelsData, setShowLabelsData] = useState(false);
  const [showPolygonData, setShowPolygonData] = useState(false);
  const [polygonAltitude, setPolygonAltitude] = useState(0.1);
  const [ambientLightValue, setAmbientLightValue] = useState(0.8);
  const [sunIntensity, setSunIntensity] = useState(5);
  const [ambientColorValue, setAmbientColorValue] = useState(0xffffff);

  const [queryUnsplash, setQueryUnsplash] = useState(
    selectedStory?.name || 'moon landing'
  );
  const [images, setImages] = useState(
    JSON.parse(localStorage.getItem('images')) || []
  );
  const [selectedImage, setSelectedImage] = useState(null);
  const [showArticleInFocusInfoBox, setShowArticleInFocusInfoBox] =
    useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOrientationDrawer({ ...orientationDrawer, [anchor]: open });
  };
  useEffect(() => {
    // setDomContext(
    //   userRole === 'viewer'
    //     ? viewerGridMap
    //     : userRole === 'creator'
    //     ? textAnalyzerGridMap
    //     : userRole === 'researcher'
    //     ? researcherGridMap
    //     : userRole === 'dev'
    //     ? standAloneWidget
    //     : textAnalyzerGridMap
    // );

    return () => {};
  }, [userRole]);

  return (
    <UIContext.Provider
      value={{
        homeUiSelected,
        setHomeUiSelected,
        userRole,
        setUserRole,
        intro,
        setIntro,

        showDrawer,
        setShowDrawer,
        orientationDrawer,
        setOrientationDrawer,
        toggleDrawer,

        showPaneMenu,
        setShowPaneMenu,
        mainPaneHeight,
        setMainPaneHeight,
        mainPaneWidth,
        setMainPaneWidth,
        floorPaneHeight,
        setFloorPaneHeight,
        paneWidth,
        setPaneWidth,
        paneHeight,
        setPaneHeight,
        paneWidth50,
        setPaneWidth50,
        paneHeight100,
        setPaneHeight100,

        // gridDOMMap,
        // setGridDOMMap,
        // domContext,
        // setDomContext,
        activeSpaces,
        setActiveSpaces,
        rows,
        setRows,
        columns,
        setColumns,

        threePaneWidthLeft,
        setThreePaneWidthLeft,
        threePaneWidthRight,
        setThreePaneWidthRight,
        widgetMenuHeight,
        setWidgetMenuHeight,

        appBackgroundColor,
        setAppBackgroundColor,
        appBackgroundEffect,
        setAppBackgroundEffect,

        showNewItem,
        setShowNewItem,

        showVideoMenu,
        setShowVideoMenu,
        showVideo,
        setShowVideo,
        paused,
        setPaused,
        intervalId,
        setIntervalId,
        showNewMarker,
        setShowNewMarker,

        showCalendarMenu,
        setShowCalendarMenu,
        showEventsMenu,
        setShowEventsMenu,
        showGlobeMenu,
        setShowGlobeMenu,
        showPersonsMenu,
        setShowPersonsMenu,
        showPropmtsMenu,
        setShowPropmtsMenu,
        showStoriesMenu,
        setShowStoriesMenu,
        showVideosMenu,
        setShowVideosMenu,
        showWikipediaMenu,
        setShowWikipediaMenu,

        toggleGlobeGoogleMaps,
        setToggleGlobeGoogleMaps,
        toggleHistogramCalendar,
        setToggleHistogramCalendar,

        showGlobeNature,
        setShowGlobeNature,
        showGlobeAnimations,
        setShowGlobeAnimations,
        showArcsData,
        setShowArcsData,
        showPointsData,
        setShowPointsData,
        showLabelsData,
        setShowLabelsData,
        showPolygonData,
        setShowPolygonData,
        polygonAltitude,
        setPolygonAltitude,
        ambientLightValue,
        setAmbientLightValue,
        ambientColorValue,
        setAmbientColorValue,
        sunIntensity,
        setSunIntensity,
        queryUnsplash,
        setQueryUnsplash,
        images,
        setImages,
        selectedImage,
        setSelectedImage,
        navBarHeight,
        mainHeight,

        showArticleInFocusInfoBox,
        setShowArticleInFocusInfoBox,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
export default UIContext;
export const UIState = () => {
  return useContext(UIContext);
};
