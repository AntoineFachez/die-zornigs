import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const today = dayjs().format('YYYY-MM-DD');
  const startUp = 'grid';
  const [kid, setKid] = useState(null);

  return (
    <AppContext.Provider value={{ today, kid, setKid }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
export const AppState = () => {
  return useContext(AppContext);
};
