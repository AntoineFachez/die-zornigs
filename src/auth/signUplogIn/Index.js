import React, { useContext, useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';

import AppContext from '../../context/AppContext';
import InFocusContext from '../../context/InFocusContext';
import UIContext from '../../context/UIContext';
import UserContext from '../../context/UserContext';

import LogIn from './LogIn';
import LogOut from './LogOut';
import SignUp from './SignUp';

import { textButtonStyles } from '../../theme/stylesData';
import { handleCreateNewUser } from './helper';

import './log-in.css';

export default function Index({}) {
  const { users, user, setUser, userInFocus, setUserInFocus } =
    useContext(UserContext);
  const { coordsInFocus } = useContext(InFocusContext);
  const { userRole } = useContext(UIContext);
  const firebaseContext = 'users';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [alert, setAlert] = useState(false);

  const switchToSignUp = () => {
    if (!showSignUp) {
      setAlert('');
      setShowSignUp(true);
    } else {
      setAlert('');
      setShowSignUp(false);
    }
  };

  const handleSubmit = async () => {
    handleCreateNewUser(
      email,
      password,
      confirmPassword,
      userRole,
      coordsInFocus,
      firebaseContext,
      setAlert
    );
  };
  return (
    <>
      {!user ? (
        <Box
          sx={{
            width: 'fit-content',
            height: '25rem',
            // maxHeight: '25rem',
            display: 'flex',
            // height: "100%",
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'space-between',
            borderRadius: '5px',
            padding: '1rem',
            backgroundColor: '#777777f2',
            boxShadow: '-2px -2px 25px 5px #33343380',
          }}
        >
          {showSignUp ? (
            <Button sx={textButtonStyles} size="small" onClick={switchToSignUp}>
              already an account ?
            </Button>
          ) : (
            <Button sx={textButtonStyles} size="small" onClick={switchToSignUp}>
              Sign Up ?
            </Button>
          )}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              padding: '1rem',
            }}
          >
            {showSignUp ? (
              <>
                <SignUp
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  confirmPassword={confirmPassword}
                  setConfirmPassword={setConfirmPassword}
                  switchToSignUp={switchToSignUp}
                  setAlert={setAlert}
                  onSubmit={handleSubmit}
                />
              </>
            ) : (
              <>
                <LogIn
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  switchToSignUp={switchToSignUp}
                  setAlert={setAlert}
                  users={users}
                  user={user}
                  setUser={setUser}
                  setUserInFocus={setUserInFocus}
                />
              </>
            )}
          </Box>
        </Box>
      ) : (
        <>
          <LogOut
            user={user}
            setUser={setUser}
            userInFocus={userInFocus}
            setUserInFocus={setUserInFocus}
            setAlert={setAlert}
          />
        </>
      )}
    </>
  );
}
