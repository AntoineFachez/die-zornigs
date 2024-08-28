import React, { useContext } from "react";

import { FormControl, Input, Button, TextField, Box } from "@mui/material";
import { useState } from "react";
// import { Snackbar } from '@material-ui/core';
import { AppState } from "../../context/AppContext";

// import { app, db, storage } from "../../firebase/firebase-config";

import "./log-in.css";
// import { styledComponentt } from "../../themes/styledComponentt";

export default function Signup({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  handleClose,
  switchToSignUp,
  setAlert,
  styledComponent,
}) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const { user } = AppState();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          // height: "100%",
          flexDirection: "column",
          gap: "1rem",
          // alignItems: "stretch",
          // padding: "1rem",
          // backgroundColor: "pink",
        }}
      >
        <TextField
          sx={{
            width: "100%",
            display: "flex",
            // height: "100%",
            flexDirection: "column",
            gap: "1rem",
            // alignItems: "stretch",
            // padding: "1rem",
            // backgroundColor: "pink",
          }}
          size={styledComponent.textField.size}
          variant={styledComponent.textField.variant}
          placeholder="email"
          type="email"
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{
            width: "100%",
            display: "flex",
            // height: "100%",
            flexDirection: "column",
            gap: "1rem",
            // alignItems: "stretch",
            // padding: "1rem",
            // backgroundColor: "pink",
          }}
          size={styledComponent.textField.size}
          variant={styledComponent.textField.variant}
          placeholder="password"
          type="password"
          label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          sx={{
            width: "100%",
            display: "flex",
            // height: "100%",
            flexDirection: "column",
            gap: "1rem",
            // alignItems: "stretch",
            // padding: "1rem",
            // backgroundColor: "pink",
          }}
          size={styledComponent.textField.size}
          variant={styledComponent.textField.variant}
          placeholder="password confirmation"
          type="password"
          label="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Box>
      <Box>
        <p className="signUp-logIn-message">{alert.message}</p>
      </Box>
    </>
  );
}
