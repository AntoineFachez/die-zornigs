import React, { useContext } from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import {
  AccountCircle,
  Class,
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
  const { appState, setAppState } = useContext(PTBalanceContext);
  const { showDrawer, setShowDrawer } = useContext(UIContext);
  return (
    <Stack
      direction="row"
      spacing={{ xs: 8, sm: 12, md: 16, lg: 24, xl: 36 }}
      sx={{
        width: '100%',
        display: 'flex',
        flexFlow: 'row nowrap',
      }}
    >
      <Box
        sx={{ width: 'fit-content', display: 'flex', flexFlow: 'row nowrap' }}
      >
        <IconButton
          onClick={() => setAppState('landingPage')}
          sx={{
            ...iconButtonStyles,
            color: appState === 'landingPage' ? 'white' : '#33343380',
          }}
          size={props.deviceType === 'desktop' ? 'large' : 'large'}
        >
          <Home fontSize="inherit" />
        </IconButton>
        <IconButton
          onClick={() => setAppState('lessons')}
          sx={{
            ...iconButtonStyles,
            color: appState === 'lessons' ? 'white' : '#33343380',
          }}
          size={props.deviceType === 'desktop' ? 'large' : 'large'}
        >
          <Class fontSize="inherit" />
        </IconButton>
      </Box>
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
      <Box
        sx={{ width: 'fit-content', display: 'flex', flexFlow: 'row nowrap' }}
      >
        <IconButton
          onClick={() => setAppState('userProfile')}
          sx={{
            ...iconButtonStyles,
            color: appState === 'userProfile' ? 'white' : '#33343380',
          }}
          size={props.deviceType === 'desktop' ? 'large' : 'large'}
        >
          <AccountCircle fontSize="inherit" />
        </IconButton>
        <IconButton
          onClick={() => setAppState('sessions')}
          sx={{
            ...iconButtonStyles,
            color: appState === 'sessions' ? 'white' : '#33343380',
          }}
          size={props.deviceType === 'desktop' ? 'large' : 'large'}
        >
          <LockClock fontSize="inherit" />
        </IconButton>
      </Box>
      {/* <Index props={props} /> */}
    </Stack>
  );
}
