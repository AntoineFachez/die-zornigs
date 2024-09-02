import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import Users from './users/Users';
import { appBodyStyles, flexBoxStyles } from '../../theme/stylesData';
import PTBalanceContext from '../../context/PTBalanceContext';

export default function DashBoard({ props }) {
  const { appState, setAppState } = useContext(PTBalanceContext);
  const switchComponent = () => {
    switch (appState) {
      case 'users':
        return <Users props={props} />;
      default:
        break;
    }
  };
  return (
    <Box sx={flexBoxStyles}>
      <Typography variant="h5">DashBoard</Typography>
      <Box
        sx={{
          //   ...flexBoxStyles,
          color: 'white',
          // backgroundColor: 'white',
        }}
      >
        <Button onClick={() => setAppState('users')}>Users</Button>
      </Box>
      {switchComponent()}
    </Box>
  );
}
