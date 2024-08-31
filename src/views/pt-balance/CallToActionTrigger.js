import { Box, Typography } from '@mui/material';
import React from 'react';
import LocationList from './LocationList';

export default function CallToActionTrigger({
  listRef,
  sectionData,
  activeLocationIndex,
  handleLocationClick,
  customFontSize,
}) {
  return (
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
        trainierst, ich passe das Training an deine Bedürfnisse und Vorlieben
        an.
      </Typography>
    </Box>
  );
}
