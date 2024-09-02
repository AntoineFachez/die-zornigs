import { Box, Typography } from '@mui/material';
import React from 'react';
import Index from '../../../auth/signUplogIn/Index';
import { flexBoxStyles } from '../../../theme/stylesData';

export default function UserAccount({ props }) {
  return (
    <Box sx={flexBoxStyles}>
      <>
        <Typography variant="h5">UserAccount</Typography>
        <Typography>{props?.user?.email}</Typography>
      </>
      <Index props={props} />{' '}
    </Box>
  );
}
//
//
