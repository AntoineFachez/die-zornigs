import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Title({ props }) {
  return (
    <Typography variant={props.titleVariant} sx={props.titleStyles}>
      {props.data.mainHeader}
    </Typography>
  );
}
