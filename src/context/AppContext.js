import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import useDeviceType from '../hooks/useDeviceType';
import useOrientation from '../hooks/updateOrientation';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // const today = dayjs().format('YYYY-MM-DD');
  const today = new Date();
  const startUp = 'grid';
  const deviceType = useDeviceType();
  const isPortrait = useOrientation();
  const [kid, setKid] = useState(null);

  return (
    <AppContext.Provider value={{ deviceType, isPortrait, today, kid, setKid }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
export const AppState = () => {
  return useContext(AppContext);
};
