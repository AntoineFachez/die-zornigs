import { Typography } from '@mui/material';
import React from 'react';

export default function SectionHeader({ props }) {
  return (
    <Typography variant={props.variant} sx={props.sectiontitleStyles}>
      {props.sectionTitle}
    </Typography>
  );
}
