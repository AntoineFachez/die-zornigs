import React from 'react';

import DateTimePickerValue from '../date-time-picker/DateTimePicker';
import { Box } from '@mui/material';

export default function AppointmentSetter() {
  return (
    <>
      <fieldset
        style={{
          width: '100%',
          height: '100%',
          // height: 'fit-content',
          maxHeight: '100%',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'flex-end',
          alignItems: 'center',
          borderRadius: '5px',
          gap: '2rem',
        }}
      >
        <legend>Dein Probetraining:</legend>

        <Box
          id="date-time-picker"
          sx={{
            // transform: 'scale(0.8)',
            // width: '100%',
            width: 'fit-content',
            // height: '100%',
            height: 'fit-content',
            // margin: '0',
            // padding: '0',
            // '& .MuiPopper-root': {
            //   width: '100%',
            //   height: '100%',
            //   margin: '0',
            padding: '0',
            //   color: 'pink',
            // },
          }}
        >
          <DateTimePickerValue />
        </Box>
      </fieldset>{' '}
    </>
  );
}
