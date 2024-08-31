import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import { sectionData } from '../../assets/data/landingPage-sectionData';
import { sectionStyles, subHeaderStyles } from '../../assets/data/stylesData';

import CallToActionTrigger from './CallToActionTrigger';
import Section from '../../components/section/Section';
import SubHeader from '../../components/headers/SubHeader';

import './landing-page.css';

export default function LandingPage() {
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

  useEffect(() => {
    const randomInterval = Math.random() * 1000 + 2500;

    setIntervalId(
      setInterval(() => {
        const newActiveLocationIndex =
          (activeLocationIndex + 1) % sectionData[2].list.length;
        handleLocationClick(newActiveLocationIndex);
      }, randomInterval)
    );

    return () => {
      clearInterval(intervalId);
    };
  }, [activeLocationIndex]);
  const renderedSections = () => {
    return sectionData.map((section) => (
      <Section
        key={section.listName} // Add a unique key for each Section
        props={{
          sectionTitle: section.sectionName,
          list: section.list,
          textBody: section.textBody,
          variant: 'h5',
          sectionStyles: sectionStyles.sectionStyles,
          sectionHeaderStyles: sectionStyles.sectionHeaderStyles,
          ulStyles: sectionStyles.ulStyles,
          liStyles: sectionStyles.liStyles,
          textBodyStyles: sectionStyles.textBodyStyles,
        }}
      />
    ));
  };
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '5rem',
        // padding: '0 5rem',
        // padding: '3rem 6rem',
      }}
    >
      <SubHeader
        props={{
          content: 'Dein individuelles Training - Wo und wie Du willst',
          variant: 'h5',
          subHeaderStyles: subHeaderStyles,
        }}
      />
      <Divider sx={{ backgroundColor: 'white' }} variant="middle" flexItem />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          // height: 'fit-content',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <CallToActionTrigger
          listRef={listRef}
          sectionData={sectionData}
          activeLocationIndex={activeLocationIndex}
          handleLocationClick={handleLocationClick}
          customFontSize={customFontSize}
        />
        {renderedSections()}
      </Box>
      <a href="#kontakt" className="cta-button">
        Beratungstermin vereinbaren
      </a>
    </Box>
  );
}
