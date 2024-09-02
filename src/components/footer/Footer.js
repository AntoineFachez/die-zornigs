import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import PTBalanceContext from '../../context/PTBalanceContext';
import NavBar from '../../views/pt-balance/NavBar';

export default function Footer({ props }) {
  return (
    <Box sx={props.footerStyles}>
      <NavBar props={props} />
    </Box>
  );
}
