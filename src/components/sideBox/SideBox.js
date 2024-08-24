import { Box, Typography } from '@mui/material';
import React from 'react';

export default function SideBox({ data }) {
  return (
    <Box
      sx={{
        width: '120px',
        height: 'auto',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        // flexFlow: 'column nowrap',
        backgroundColor: '#333433',
      }}
    >
      <Box sx={{}}>
        <img
          style={{
            width: '100%',
            height: 'auto',

            objectFit: 'cover',
            borderRadius: '5px',
          }}
          src={data.trainer.profileImageUrl}
          alt={data?.trainer.profileImageUrl}
        />
      </Box>
      <Typography
        variant="h6"
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
        {data.trainer.name}
      </Typography>{' '}
      <video
        width="320"
        height="240"
        controls
        autoPlay={false}
        pause={true}
        loop
        muted
      >
        <source src={data.videoUrl} type="video/mp4" />
      </video>
      <Typography variant="body1" sx={{}}>
        {data.introText}
      </Typography>
    </Box>
  );
}
