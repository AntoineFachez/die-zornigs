import React from 'react';

import DateTimePickerValue from '../date-time-picker/DateTimePicker';
import { Box } from '@mui/material';

export default function AppointmentSetter() {
  return (
    <>
      {/* <fieldset
      style={{
        width: '100%',
        // display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-end',
        alignItems: 'center',
        border: 'solid 1px black',
        borderRadius: '5px',
      }}
    >
      <legend>Dein Probetraining:</legend> */}

      {/* </fieldset> */}

      <Box
        id="date-time-picker"
        sx={
          {
            // width: '100%',
            // height: '100%',
            // margin: '0',
            // padding: '0',
            // '& .MuiPopper-root': {
            //   width: '100%',
            //   height: '100%',
            //   margin: '0',
            //   padding: '0',
            //   color: 'pink',
            // },
          }
        }
      ></Box>
      <DateTimePickerValue />
    </>
  );
}
