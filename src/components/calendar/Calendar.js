import React, { useState, useContext } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import dayjs from 'dayjs';
import PTBalanceContext from '../../context/PTBalanceContext';
export default function BasicDateCalendar() {
  const { pickedDate, setPickedDate } = useContext(PTBalanceContext);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={pickedDate}
        onChange={(newValue) => setPickedDate(newValue)}
      />
    </LocalizationProvider>
  );
}
