import React, { createContext, useContext, useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import AppContext from './AppContext.js';

const PTBalanceContext = createContext();

export const PTBalanceProvider = ({ children }) => {
  const { today } = useContext(AppContext);
  const [showForm, setShowForm] = useState(true);
  const [lessonInFocus, setLessonInFocus] = useState(null);

  const [inquiryStepIndex, setInquiryStepIndex] = useState(0);
  const [pickedDateTime, setPickedDateTime] = useState(dayjs(today));
  // const [pickedTime, setPickedTime] = useState(dayjs(today));

  // console.log(today, dayjs(pickedDateTime).format('YYYY-MM-DD'));
  const [inquiry, setInquiry] = useState({
    lessonTitle: '',
    userName: 'anthony',
    email: 'anthony.zornig@gmx.de',
    mobileNumer: '015257063563',
    message: '',
    preferedDate: dayjs(pickedDateTime).format('YYYY-MM-DD'),
    preferedContact: '',
  });
  // useEffect(() => {
  //   setInquiry({
  //     ...inquiry,
  //     preferedDate: dayjs(pickedDateTime).format('YYYY-MM-DD'),
  //   });
  // }, [pickedDateTime]);
  return (
    <PTBalanceContext.Provider
      value={{
        showForm,
        setShowForm,
        lessonInFocus,
        setLessonInFocus,
        inquiryStepIndex,
        setInquiryStepIndex,
        pickedDateTime,
        setPickedDateTime,
        // pickedTime,
        // setPickedTime,
        inquiry,
        setInquiry,
      }}
    >
      {children}
    </PTBalanceContext.Provider>
  );
};
export default PTBalanceContext;
export const PTBalanceState = () => {
  return useContext(PTBalanceContext);
};
