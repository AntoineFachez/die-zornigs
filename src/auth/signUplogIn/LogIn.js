import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import { FormControl, Input, Button, TextField } from "@material-ui/core";
import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import { signOut } from "firebase/auth";
// import { AppState } from "../contexts/AppContext";
import AppContext, { AppState } from "../../context/AppContext";
import { auth, db } from "../../firebase/firebase";

import "./log-in.css";
import { arrayUnion } from "firebase/firestore";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import {
  handleAddDocToSubCollection,
  getDocIdSByValueSearch,
} from "../../firebase/helperFunctions";

const Login = ({
  users,
  user,
  setUser,
  userInFocus,
  setUserInFocus,
  handleClose,
  switchToSignUp,
  styledComponent,
}) => {
  const { alert, setAlert } = AppState();
  // const [loggedIn, setLoggedIn] = useState(false);
  // const { logId, setLogId } = useContext(AppContext);
  const { log, setLog } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const handleSubmit = async (e) => {
    // e.preventDefautl();
    if (!email || !password) {
      setAlert({
        open: true,
        message: "fill in email and password",
        type: "error",
      });
    }
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (userCredential.user.emailVerified) {
        setUser(userCredential.user);

        //* Set Log of login Time
        const data = {
          logsFrontEnd: arrayUnion({
            logIn: new Date().getTime(),
            logIn2: new Date(),
            logId: uuidv4(),
          }),
        };

        const parentCollectionName = "users";
        const subCollectionName = "logs";
        const queryField = "userId";
        const searchString = userCredential.user.uid;
        const setItemInFocus = setLog;
        const foundParents = users;
        const parentDoc = await getDocIdSByValueSearch(
          parentCollectionName,
          queryField,
          searchString,
          foundParents,
        );
        // console.log("parentCollectionName", parentDoc.parentDoc);
        // users.push(parentDoc.parentDoc);

        if (parentDoc.parentId)
          handleAddDocToSubCollection(
            parentCollectionName,
            parentDoc.parentId,
            subCollectionName,
            data,
            setItemInFocus,
            setError,
          );
        setUserInFocus(parentDoc?.parentDoc);

        setAlert({
          open: true,
          message: `welcome ${userCredential.user.email}`,
          type: "success",
        });
      } else {
        setAlert({
          open: true,
          message: `please check your emails before proceeding`,
          type: "success",
        });
      }
      // window.localStorage.setItem(JSON.stringify("userLogin", userCredential));
      // localStorage.clear();
      // window.localStorage.clear();
    } catch (error) {
      setError(error);
      // setAlert({
      //   open: true,
      //   message: error.message,
      //   type: "error",
      // });
      return;
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          // height: "100%",
          flexDirection: "column",
          gap: "1rem",
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
          // sx={styledComponent.textField}
          size={styledComponent.textField.size}
          variant={styledComponent.textField.variant}
          placeholder="email"
          type="email"
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // fullWidth
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
          // sx={styledComponent.textField}
          size={styledComponent.textField.size}
          variant={styledComponent.textField.variant}
          placeholder="password"
          type="password"
          label="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // fullWidth
        />
      </Box>
      <Box className="form-footer">
        <Typography>{error?.code}</Typography>
        <p className="signUp-logIn-message">{alert?.message}</p>
        {email && password ? (
          <Button
            sx={styledComponent.button}
            // style={{ backgroundColor: "grey" }}
            onClick={handleSubmit}
            variant={styledComponent.button.variant}
          >
            Log In
          </Button>
        ) : (
          <Button
            sx={styledComponent.button}
            onClick={switchToSignUp}
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            no account yet ?
          </Button>
        )}
      </Box>
      {/* )} */}
      {/* {user ? null : (
        <button className="signUp-login-btn" onClick={logOut}>
          Log Out
        </button>
      )} */}
    </>
  );
};

export default Login;
