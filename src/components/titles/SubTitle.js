import { Typography } from '@mui/material';
import React from 'react';

export default function SubHeader({ props }) {
  return (
    <Typography variant={props.variant} sx={props.subTitleStyles}>
      {props.content}
    </Typography>
  );
}
