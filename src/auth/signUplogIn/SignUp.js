import React, { useContext, useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { textButtonStyles, textFieldStyles } from '../../theme/stylesData';

import './log-in.css';

const Signup = ({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  handleClose,
  switchToSignUp,
  setAlert,
  onSubmit,
}) => {
  const [error, setError] = useState();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <>
      <TextField
        sx={textFieldStyles}
        placeholder="email"
        type="email"
        label="email"
        value={email}
        size="small"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        sx={textFieldStyles}
        size={'small'}
        placeholder="password"
        type="password"
        label="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <TextField
        sx={textFieldStyles}
        size={'small'}
        placeholder="password confirmation"
        type="password"
        label="confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <Box className="form-footer">
        <Button sx={textButtonStyles} size="small" onClick={onSubmit}>
          Sign Up
        </Button>
        <Typography>{error?.code}</Typography>

        <p className="signUp-logIn-message">{alert.message}</p>
      </Box>
    </>
  );
};
export default Signup;
