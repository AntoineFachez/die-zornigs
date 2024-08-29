import React from 'react';

import BasicDateCalendar from '../../components/calendar/Calendar';
import TimePicker from '../../components/time-picker/TimePicker';
import DateTimePickerValue from '../date-time-picker/DateTimePicker';

export default function AppointmentSetter() {
  return (
    <>
      <fieldset
        style={{
          width: '100%',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <legend>Dein Probetraining:</legend> <DateTimePickerValue />
      </fieldset>

      {/* <fieldset
        style={{
          width: '100%',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <legend>Dein Probetraining:</legend> <BasicDateCalendar />
      </fieldset>
      <fieldset
        style={{
          width: '100%',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <legend>Dein Probetraining:</legend> <BasicDateCalendar />
      </fieldset>
      <fieldset
        style={{
          width: '100%',
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <legend>Deine Wunsch Uhrzeit</legend> <TimePicker />
      </fieldset> */}
    </>
  );
}
