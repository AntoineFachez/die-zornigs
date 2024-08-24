import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Card({ item, i }) {
  return (
    <Box
      key={i}
      sx={{
        position: 'relative',
        width: '100%',
        // height: '100%',
        // maxHeight: '20rem',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      {' '}
      <Typography
        variant="h4"
        sx={{
          zIndex: 100,
          position: 'sticky',
          width: '100%',
          top: '0rem',
          display: 'flex',
          flexFlow: 'column nowrap',
          color: 'black',
          backgroundColor: '#33343380',
        }}
      >
        {item.header}
      </Typography>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexFlow: 'row nowrap',
          padding: '1rem',
          backgroundColor: '#333433',
        }}
      >
        {' '}
        <Box
          sx={{
            width: item.imageUrl ? '50%' : '100%',
            height: '100%',
            display: 'flex',
            // flexFlow: 'column nowrap',
            backgroundColor: '#333433',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              position: 'sticky',
              top: '0rem',
              minWidth: '20ch',
              maxWidth: item.imageUrl ? '50ch' : '80ch',

              display: 'flex',
              flexFlow: 'column nowrap',
              paddingRight: '1rem',
              textAlign: 'justify',
              color: 'black',
            }}
          >
            {item.content}
          </Typography>{' '}
        </Box>
        {item.imageUrl && (
          <Box
            sx={{
              position: 'sticky',
              top: '0rem',
              width: '45%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              // flexFlow: 'column nowrap',
              backgroundColor: '#333433',
            }}
          >
            <img
              style={{
                // width: '100%',
                // height: 'auto',
                maxWidth: '15rem',
                maxHeight: '35rem',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
              src={item.imageUrl}
              alt={item?.imageAlt}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
