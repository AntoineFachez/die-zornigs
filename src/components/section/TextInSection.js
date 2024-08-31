import { Typography } from '@mui/material';
import React from 'react';

export default function TextInSection({ props }) {
  return <Typography sx={props.textBodyStyles}>{props.textBody}</Typography>;
}
