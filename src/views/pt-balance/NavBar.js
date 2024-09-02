import React, { useContext } from 'react';
import { IconButton, Stack } from '@mui/material';
import {
  AccountCircle,
  Dashboard,
  Home,
  LockClock,
  Menu,
} from '@mui/icons-material';

import PTBalanceContext from '../../context/PTBalanceContext';

import { iconButtonStyles } from '../../theme/stylesData';
import Title from '../../components/titles/Title';
import UIContext from '../../context/UIContext';
import Index from '../../auth/signUplogIn/Index';

export default function NavBar({ props }) {
  const { setAppState } = useContext(PTBalanceContext);
  const { showDrawer, setShowDrawer } = useContext(UIContext);
  return (
    <Stack direction="row" spacing={{ xs: 8, sm: 12, md: 16, lg: 24, xl: 36 }}>
      <IconButton
        onClick={() => setAppState('landingPage')}
        sx={{
          ...iconButtonStyles,
        }}
        size={props.deviceType === 'desktop' ? 'large' : 'large'}
      >
        <Home fontSize="inherit" />
      </IconButton>
      {props.deviceType === 'desktop' ? (
        <Title props={props} />
      ) : (
        <IconButton
          onClick={() => setShowDrawer(!showDrawer)}
          sx={{
            ...iconButtonStyles,
          }}
          size={props.deviceType === 'desktop' ? 'large' : 'large'}
        >
          <Menu fontSize="inherit" />
        </IconButton>
      )}
      <IconButton
        onClick={() => setAppState('userProfile')}
        sx={{
          ...iconButtonStyles,
        }}
        size={props.deviceType === 'desktop' ? 'large' : 'large'}
      >
        <AccountCircle fontSize="inherit" />
      </IconButton>
      <IconButton
        onClick={() => setAppState('sessions')}
        sx={{
          ...iconButtonStyles,
        }}
        size={props.deviceType === 'desktop' ? 'large' : 'large'}
      >
        <LockClock fontSize="inherit" />
      </IconButton>
      {/* <Index props={props} /> */}
    </Stack>
  );
}
