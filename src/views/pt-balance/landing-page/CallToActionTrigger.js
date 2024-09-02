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
  const list = (
    <LocationList
      listRef={listRef}
      locations={sectionData[2].list}
      activeLocationIndex={activeLocationIndex}
      handleLocationClick={handleLocationClick}
      customFontSize={customFontSize}
    />
  );

  return (
    <Box
      sx={{
        width: '100%',
        height: 'fit-content',
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      {' '}
      <Typography>
        Ob Du nun lieber{' '}
        <span
          style={{
            position: 'relative',
            width: '9ch',
            display: 'inline-block',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              width: 'max-content',
              bottom: '-52px',
            }}
          >
            {list}
          </Box>
        </span>{' '}
        trainierst, ich passe das Training an deine Bedürfnisse und Vorlieben
        an.
      </Typography>
    </Box>
  );
}
