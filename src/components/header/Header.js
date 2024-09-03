import { Box, Typography } from '@mui/material';
import React from 'react';

import { titleStyles } from '../../theme/stylesData';

import NavBar from '../../components/nav-bar/NavBar';
import Title from '../titles/Title';

import '../../index.css';

export default function Header({ props }) {
  return (
    <Box sx={props.headerStyles}>
      {props.deviceType === 'desktop' ? (
        <NavBar
          props={{
            ...props,
            titleStyles: titleStyles,
            titleVariant: 'h2',
          }}
        />
      ) : (
        <Title
          props={{
            ...props,
            titleStyles: titleStyles,
            titleVariant: 'h5',
          }}
        />
      )}
    </Box>
  );
}
