import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import { sectionData } from '../../../assets/data/landingPage-sectionData';
import {
  subTitleStyles,
  flexBoxStyles,
  sectionsContainerStyles,
} from '../../../theme/stylesData';

import CallToActionTrigger from './CallToActionTrigger';
import SubTitle from '../../../components/titles/SubTitle';
import Sections from './Sections';

import './landing-page.css';

export default function LandingPage({ props }) {
  const listRef = useRef(null);

  const [activeLocationIndex, setActiveLocationIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  // const [currentLocation, setCurrentLocation] = useState(
  //   sectionData.locationsToTrain[1]
  // );

  const customFontSize = 16;
  const customLineSpacing = (customFontSize / 4) * 3;
  const customnMargin = customFontSize + customLineSpacing / 2;

  const handleLocationClick = (index) => {
    setActiveLocationIndex(index);
    // setCurrentLocation(sectionData.locationsToTrain[index]?.location);
    if (listRef.current) {
      listRef.current.style.marginTop = `-${index * customnMargin}px`;
      listRef.current.style.marginBottom = `${index * customnMargin}px`;
      listRef.current.classList.add('landing-page__location-list');
      setTimeout(() => {
        listRef.current.classList.remove('landing-page__location-list');
      }, 10);
    }
    clearInterval(intervalId);
  };

  // useEffect(() => {
  //   const randomInterval = Math.random() * 1000 + 2500;

  //   setIntervalId(
  //     setInterval(() => {
  //       const newActiveLocationIndex =
  //         (activeLocationIndex + 1) % sectionData[2].list.length;
  //       handleLocationClick(newActiveLocationIndex);
  //     }, randomInterval)
  //   );

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [activeLocationIndex]);

  return (
    <Box
      sx={{
        ...flexBoxStyles,
        marginTop: props.deviceType === 'desktop' ? '5rem' : '2rem',
      }}
    >
      <SubTitle
        props={{
          content:
            props.deviceType === 'desktop'
              ? 'Dein individuelles Training - Wo und wie Du willst'
              : `Dein individuelles Training`,
          variant: props.deviceType === 'desktop' ? 'h5' : 'body1',
          subTitleStyles: subTitleStyles,
        }}
      />
      <Divider sx={{ backgroundColor: 'white' }} variant="middle" flexItem />
      <Box sx={{ display: { xs: 'none', md: 'inline-flex' } }}>
        <CallToActionTrigger
          listRef={listRef}
          sectionData={sectionData}
          activeLocationIndex={activeLocationIndex}
          handleLocationClick={handleLocationClick}
          customFontSize={customFontSize}
        />{' '}
      </Box>
      <Box
        className="sections-container scroll-container "
        sx={{
          ...sectionsContainerStyles,
          backgroundColor:
            props.deviceType === 'desktop' ? '#33343360' : 'white',
          margin: '1rem 0 0rem 0',
          padding: '1rem 0 5rem 0',
        }}
      >
        <Sections props={props} />
      </Box>
      <a href="#kontakt" className="cta-button">
        Beratungstermin vereinbaren
      </a>
    </Box>
  );
}
