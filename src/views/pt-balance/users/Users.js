import { Box, Typography } from '@mui/material';
import React from 'react';
import { mockUsers } from '../../../assets/data/mockUsers';
import { flexBoxStyles } from '../../../theme/stylesData';

export default function Users({ props }) {
  return (
    <Box sx={flexBoxStyles}>
      <Box>Users</Box>
      <Box sx={{ ...flexBoxStyles, flexFlow: 'row wrap', gap: '1rem' }}>
        {mockUsers?.map((user, i) => (
          <Box
            key={i}
            sx={{
              ...flexBoxStyles,
              width: 'fit-content',
              height: 'fit-content',
              backgroundColor: '#33343380',
              padding: '1rem',
              borderRadius: '5px',
              boxShadow: '-2px -2px 25px 5px #33343380',
            }}
          >
            <Box
              sx={{
                ...flexBoxStyles,
                height: '5rem',
                flexFlow: 'row nowrap',
                justifyItems: 'space-between',
                alignItems: 'flex-start',
                padding: 0,
                margin: 0,
              }}
            >
              <Typography sx={{ width: '100%' }}>{user.userName}</Typography>
              <Typography sx={{ width: '100%' }}>{user.age}</Typography>
              <Box>
                {user.userRoles.map((role, i) => (
                  <Typography key={i}>{role.userRole}</Typography>
                ))}
              </Box>
            </Box>
            <Typography>{user.email}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
