import { Box } from '@mui/material';
import React, { useRef } from 'react';
import './landing-page.css';

// const customFontSize = 16;
// const customLineSpacing = (customFontSize / 4) * 3;
// const customnMargin = customFontSize + customLineSpacing / 2;

const LocationList = ({
  listRef,
  locations,
  activeLocationIndex,
  handleLocationClick,
  customFontSize,
}) => {
  const handleLocationClickInternal = (index) => {
    handleLocationClick(index);

    // if (listRef.current) {
    //   listRef.current.style.marginTop = `-${index * customnMargin}px`;
    //   listRef.current.style.marginBottom = `${index * customnMargin}px`;
    //   listRef.current.classList.add('landing-page__location-list');
    //   setTimeout(() => {
    //     listRef.current.classList.remove('landing-page__location-list');
    //   }, 10);
    // }
  };

  return (
    <Box
      ref={listRef}
      sx={{
        position: 'relative',
        width: 'fit-content',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        margin: `0 6px`,
      }}
    >
      {locations.map((location, index) => (
        <Box
          className={
            index === activeLocationIndex
              ? 'location-list__active-item'
              : 'location-list__inactive-item'
          }
          key={location.location}
          sx={{
            display: 'flex',
            flexFlow: 'column nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            fontFamily: 'Reddit Sans',
            fontSize: customFontSize,
            fontWeight: 500,
          }}
          onClick={() => handleLocationClickInternal(index)}
        >
          {location.selectorText}
        </Box>
      ))}
    </Box>
  );
};

export default LocationList;
