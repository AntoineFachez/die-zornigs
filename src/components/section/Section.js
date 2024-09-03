import React from 'react';
import SectionHeader from './SectionHeader';
import { Box } from '@mui/material';
import ListInSection from './ListInSection';
import TextInSection from './TextInSection';
import SingleImage from '../../widgets/unsplash/SingleImage';
import ImageCaroussell from '../../widgets/unsplash/ImageCarrousel';

export default function Section({ props }) {
  console.log(props.deviceType);

  return (
    <Box
      component="section"
      sx={{
        ...props?.sectionStyles,
        width: props.deviceType === 'desktop' ? 'fit-content' : '100%',
        maxWidth: props.deviceType === 'desktop' ? '25ch' : '100%',
        border: 'none',
        borderRadius: props.deviceType === 'desktop' ? '5px' : '0',
        boxShadow:
          props.deviceType === 'desktop'
            ? '-2px -2px 25px 5px #33343380'
            : 'none',
      }}
    >
      <Box
        sx={{
          zIndex: 100,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SectionHeader props={props} />
        {props?.list && <ListInSection props={props} />}
        <Box
          sx={{
            margin: '0 2rem',
          }}
        >
          {props?.textBody && <TextInSection props={props} />}
        </Box>
      </Box>

      <Box
        sx={{
          zIndex: 0,
          position: 'absolute',
          filter: 'blur(2px) brightness(0.7) contrast(110%) grayscale(30%)',
          height: '100%',
          borderRadius: '5px',
          border: 'none',
        }}
      >
        <SingleImage
          activeSearchTerm={props?.list?.[0]?.searchTerm}
          props={props}
        />
      </Box>
    </Box>
  );
}
//
