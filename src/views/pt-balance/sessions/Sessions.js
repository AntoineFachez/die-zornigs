import { Box, Typography } from '@mui/material';
import React from 'react';
import { mockSessionsData } from '../../../assets/data/mockSessionsData';
import { flexBoxStyles } from '../../../theme/stylesData';
import dayjs from 'dayjs';

export default function Sessions({ props }) {
  const sortedData = mockSessionsData.sort(
    (a, b) => b.sessionDateTimeStart - a.sessionDateTimeStart
  );
  return (
    <Box sx={flexBoxStyles}>
      <Typography>Sessions</Typography>
      <Box
        sx={{
          // ...flexBoxStyles,
          height: '100%',
          display: 'inline-flex',
          flexFlow: 'column nowrap',
          gap: '1rem',
          overflow: 'scroll',
        }}
      >
        {sortedData.map((session, i) => (
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
                width: '100%',
                height: 'fit-content',
                flexFlow: 'row nowrap',
                justifyItems: 'space-between',
                alignItems: 'flex-start',

                backgroundColor: session.isTrialTraining
                  ? 'orange'
                  : '#33343380',
                // padding: '1rem',
                borderRadius: '5px',
                boxShadow: '-2px -2px 25px 5px #33343380',
                gap: '1rem',
              }}
            >
              <Typography>
                {session.isTrialTraining ? 'Probetraining' : ''}
              </Typography>
              <Typography>{session.lessionName}</Typography>
            </Box>
            <Typography>{session.userName}</Typography>
            <Typography>
              start:
              {dayjs(session.sessionDateTimeStart).format('HH:mm')}{' '}
              {dayjs(session.sessionDateTimeStart).format('dddd, MMM.DD.YYYY')}
            </Typography>
            <Typography>
              end:
              {dayjs(session.sessionDateTimeEnd).format('HH:mm')}{' '}
              {dayjs(session.sessionDateTimeEnd).format('dddd, MMM.DD.YYYY')}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
