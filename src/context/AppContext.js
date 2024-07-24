import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const startUp = 'grid';
  const [kid, setKid] = useState(null);

  return (
    <AppContext.Provider
      value={{
        kid,
        setKid,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
export const AppState = () => {
  return useContext(AppContext);
};
