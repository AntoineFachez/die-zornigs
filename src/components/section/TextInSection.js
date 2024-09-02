import { Typography } from '@mui/material';
import React from 'react';
import ImageCaroussell from '../../widgets/unsplash/ImageCarrousel';

export default function TextInSection({ props }) {
  return (
    <>
      <Typography sx={{ ...props.textBodyStyles, fontSize: '1.2rem' }}>
        {props.textBody}
      </Typography>
    </>
  );
}
