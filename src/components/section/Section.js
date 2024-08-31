import React from 'react';
import SectionHeader from './SectionHeader';
import { Box } from '@mui/material';
import ListInSection from './ListInSection';
import TextInSection from './TextInSection';

export default function Section({ props }) {
  return (
    <Box component="section" sx={props?.sectionStyles}>
      <SectionHeader props={props} />

      {props?.list && <ListInSection props={props} />}
      {props?.textBody && <TextInSection props={props} />}
    </Box>
  );
}
