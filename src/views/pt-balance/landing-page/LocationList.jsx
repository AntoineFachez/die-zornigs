import { Box } from '@mui/material';
import React, { useRef } from 'react';
import './landing-page.css';

const LocationList = ({
  listRef,
  locations,
  activeLocationIndex,
  handleLocationClick,
  customFontSize,
}) => {
  const handleLocationClickInternal = (index) => {
    handleLocationClick(index);
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
          key={`${location.location + index}`}
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
