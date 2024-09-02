import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';

import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import PTBalanceContext from '../../context/PTBalanceContext';
import { Badge } from '@mui/material';

import './date-time-picker.css';

export default function DateTimePickerValue() {
  const { pickedDateTime, setPickedDateTime } = useContext(PTBalanceContext);
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 15]);
  const [minTime, setMinTime] = React.useState(
    dayjs().set('hour', 6).startOf('hour')
  );
  const [maxTime, setMaxTime] = React.useState(
    dayjs().set('hour', 21).startOf('hour')
  );

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
  const handleSetPickedDateTime = (newValue) => {
    console.log(newValue);

    setPickedDateTime(newValue ? newValue : dayjs());
    setMinTime(newValue.set('hour', 6).startOf('hour'));
    setMaxTime(newValue.set('hour', 21).startOf('hour'));
  };
  const TextField = () => {};
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateTimePicker
        className="date-time-picker"
        // container={document.getElementById('date-time-picker')}

        classes={{
          selectedDay: 'my-selected-day-class',
        }}
        sx={{
          height: '100%',
          // '& .MuiPickersDay-root, .MuiDateCalendar >*': {
          //   color: '#bbdefb',
          //   borderRadius: '13px',
          //   borderWidth: '0px',
          //   borderColor: '#2196f3',
          //   border: '0px solid',
          //   backgroundColor: '#0d47a1',
          //   fontSize: '10px',
          // },
        }}
        value={pickedDateTime}
        onChange={(newValue) => handleSetPickedDateTime(newValue)}
        // orientation="landscape"
        showDaysOutsideCurrentMonth={true}
        label="Wähle Wunsch Tag und Uhrzeit"
        ampm={false} // Set to false for 24-hour format
        // renderInput={(params) => <TextField {...params} />}
        format="dddd, DD.MM.YYYY HH:mm"
        minutesStep={15}
        // slots={{
        //   day: DayIndicator,
        //   // disabled: (day) => dayjs(day).isBefore(dayjs(), 'day'), // no effect
        //   // toolbar: 'hello world',
        // }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
        // timeStep={{ hours: 1, minutes: 5, seconds: 5 }}
        disablePast
        formatDensity="dense"
        minTime={minTime}
        maxTime={maxTime}
      />
    </LocalizationProvider>
  );
}
