import React, { createContext, useContext, useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import AppContext from './AppContext.js';

const PTBalanceContext = createContext();

export const PTBalanceProvider = ({ children }) => {
  const { today } = useContext(AppContext);
  const [appState, setAppState] = useState('landingPage');
  // const [appState, setAppState] = useState('lessons');
  const [showForm, setShowForm] = useState(false);
  const [lessonInFocus, setLessonInFocus] = useState(null);

  const [inquiryStepIndex, setInquiryStepIndex] = useState(0);
  const [pickedDateTime, setPickedDateTime] = useState(dayjs(today));
  // const [pickedTime, setPickedTime] = useState(dayjs(today));

  const [inquiry, setInquiry] = useState({
    lessonTitle: '',
    userName: 'anthony',
    email: 'anthony.zornig@gmx.de',
    mobileNumer: '015257063563',
    message: '',
    pickedDateTime: '',
    preferedContact: '',
  });
  useEffect(() => {
    // setLessonInFocus();
    setInquiryStepIndex(0);
    setPickedDateTime();

    return () => {};
  }, [showForm]);

  return (
    <PTBalanceContext.Provider
      value={{
        appState,
        setAppState,
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
