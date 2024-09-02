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
        // margin: 0,
        // padding: 0,
        // position: 'relative',
        width: props.deviceType === 'desktop' ? 'fit-content' : '100%',
        // minWidth: props.deviceType === 'desktop' ? '20ch' : '100%',
        maxWidth: props.deviceType === 'desktop' ? '25ch' : '100%',
        // // height: 'fit-content',
        // minHeight: '15ch',
        // display: 'flex',
        // flexFlow: 'column nowrap',
        // justifyContent: 'center',
        // // justifyContent: 'flex-start',
        // alignItems: 'center',
        // // alignItems: 'flex-start',
        // fontFamily: 'Julius Sans One',
        // // backgroundColor: '#33343360',
        // // borderRadius: '5px',
        // // padding: '2rem',
        border: 'none',
        // border: 'solid 1px #555',
        borderRadius: props.deviceType === 'desktop' ? '5px' : '0',
        boxShadow:
          props.deviceType === 'desktop'
            ? '-2px -2px 25px 5px #33343380'
            : 'none',
        // backgroundColor: props.deviceType === 'desktop' ? '#33343360' : 'white',
      }}
    >
      <Box
        sx={{
          zIndex: 100,
          // position: 'absolute',
          // top: 0,
          // right: 0,
          // bottom: 0,
          // left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          alignItems: 'center',
          // padding: '2rem',
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

          // top: 0,
          // right: 0,
          // bottom: 0,
          // left: 0,
          width: '100%',
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
