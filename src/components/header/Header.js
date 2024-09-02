import { Box, Typography } from '@mui/material';
import React from 'react';

import { titleStyles } from '../../theme/stylesData';
import NavBar from '../../views/pt-balance/NavBar';

import '../../index.css';
import Title from '../titles/Title';

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
