import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './context/AppContext';
import { UserProvider } from './context/UserContext';
import { InFocusProvider } from './context/InFocusContext';
import { PTBalanceProvider } from './context/PTBalanceContext';
import { SearchProvider } from './context/SearchContext';
import { UIProvider } from './context/UIContext';
import App from './App';

import reportWebVitals from './reportWebVitals';

import './index.css';
import './globalStyles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <UserProvider>
      <UIProvider>
        <InFocusProvider>
          <PTBalanceProvider>
            <SearchProvider>
              <App />
            </SearchProvider>
          </PTBalanceProvider>
        </InFocusProvider>
      </UIProvider>
    </UserProvider>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
