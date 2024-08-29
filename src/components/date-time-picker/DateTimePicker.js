import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';

import PTBalanceContext from '../../context/PTBalanceContext';
import { Badge } from '@mui/material';
import { PickersDay } from '@mui/x-date-pickers';
export default function DateTimePickerValue() {
  const { pickedDateTime, setPickedDateTime } = useContext(PTBalanceContext);
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 15]);

  function DayIndicator(props) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected =
      !props.outsideCurrentMonth &&
      highlightedDays.indexOf(props.day.date()) >= 0;
    const isPastDate = dayjs(day).isBefore(dayjs(), 'day');

    return (
      <Badge
        key={props.day.toString()}
        overlap="circular"
        badgeContent={isSelected ? '🌚' : undefined}
      >
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          // outsideCurrentMonth={outsideCurrentMonth ? ' ' : day.format('D')}
          day={day}
          disabled={isPastDate} // Pass the 'disabled' prop here
        />
      </Badge>
    );
  }
  const TextField = () => {};
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        <DesktopDateTimePicker
          orientation="landscape"
          label="Wähle Wunsch Tag und Uhrzeit"
          value={pickedDateTime}
          onChange={(newValue) => setPickedDateTime(newValue)}
          slots={{
            day: DayIndicator,
            // disabled: (day) => dayjs(day).isBefore(dayjs(), 'day'), // no effect
          }}
          slotProps={{
            day: {
              highlightedDays,
            },
          }}
          sx={{
            '& .MuiDialogActions-root': {
              // Adjust the selector if needed based on your inspection
              display: 'none',
            },
          }}
          ampm={false} // Set to false for 24-hour format
          renderInput={(params) => <TextField {...params} />}
          format="dd. DD.MM.YYYY hh:mm"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
