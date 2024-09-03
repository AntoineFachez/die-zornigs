import dayjs from 'dayjs';
import React, { useContext, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import PTBalanceContext from '../../context/PTBalanceContext';

export default function ResponsiveTimePickers() {
  const { pickedTime, setPickedTime } = useContext(PTBalanceContext);
  useEffect(() => {
    setPickedTime(dayjs('2022-04-17T15:30'));
    return () => {};
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileTimePicker
        defaultValue={pickedTime}
        // value={'15:30'}
        onChange={(newValue) => setPickedTime(newValue)}
      />
    </LocalizationProvider>
  );
}
