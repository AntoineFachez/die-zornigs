import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import './landing-page.css';
import Section from '../../components/section/Section';
import LocationList from './LocationList';
import SubHeader from '../../components/headers/SubHeader';

const sectionData = [
  {
    sectionName: ' Arten',
    list: [
      { name: 'Mit Geräten' },
      {
        name: 'Mit eigenem Körpergewicht',
      },
    ],
  },
  {
    sectionName: ' Studio Vorteile',
    list: [
      { name: 'Wellness-Spa-Bereich' },
      { name: 'Kinderbetreuung' },
      { name: 'Gastronomie' },
      { name: 'Schwimmbad' },
    ],
  },
  {
    sectionName: ' Orte',
    list: [
      {
        location: 'park',
        name: 'Park',
        selectorText: 'im Park',
        textLong: 'Bei dir zuhause',
      },
      {
        location: 'kaifuLodge',
        name: 'Kaifu-Lodge',
        selectorText: 'im Studio',
        textLong: 'Im Park',
      },
      {
        location: 'atHome',
        name: 'zuhause',
        selectorText: 'zuhause',
        textLong: 'Im schönsten Studio Hamburgs: Kaifu-Lodge',
      },
    ],
  },
  {
    sectionName: 'Mein ganzheitlicher Ansatz:',
    textBody:
      'Fitness und Gesundheit stehen im Mittelpunkt. Ich kombiniere die besten Aspekte aller Trainingsarten, um ein maßgeschneidertes Programm für dich zu erstellen.',
  },
  {
    sectionName: '',
    textBody:
      'Aller Anfang ist schwer? Nicht bei mir! Ich mache den Einstieg so einfach wie möglich. Komm vorbei und überzeuge dich selbst!',
  },
];
const subHeaderStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  fontFamily: 'Julius Sans One',
  marginBottom: 20,
};
const sectionStyles = {
  sectionStyles: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Julius Sans One',
  },
  sectionHeaderStyles: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: 'Julius Sans One',
  },
  ulStyles: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 0,
    margin: 0,
  },
  liStyles: {
    padding: 0,
    margin: 0,
    fontFamily: 'Reddit Sans',
  },
  textBodyStyles: {
    width: '100%',
    maxWidth: '40ch',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 0,
    margin: 0,
    fontFamily: 'Reddit Sans',
  },
};
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
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Typography
            style={{
              padding: 0,
              margin: 0,
            }}
          >
            Ob Du nun lieber
          </Typography>
          <LocationList
            listRef={listRef}
            locations={sectionData[2].list}
            activeLocationIndex={activeLocationIndex}
            handleLocationClick={handleLocationClick}
            customFontSize={customFontSize}
          />
          <Typography
            style={{
              padding: 0,
              margin: 0,
            }}
          >
            trainierst, ich passe das Training an deine Bedürfnisse und
            Vorlieben an.
          </Typography>
        </Box>
        {renderedSections()}
      </Box>
      <a href="#kontakt" className="cta-button">
        Beratungstermin vereinbaren
      </a>
    </Box>
  );
}
