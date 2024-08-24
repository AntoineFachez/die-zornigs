import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Footer({ data }) {
  return (
    <Box sx={{ position: 'fixed', bottom: 0 }}>
      {/* <iframe
        style={{ height: '100px' }}
        src={data.videoUrl}
        alt=""
        title="yoga"onLoad={}
      />{' '} */}
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
