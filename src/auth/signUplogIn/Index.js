import React, { useContext, useEffect, useState } from "react";
// import { FormControl, Input, Button, TextField } from "@material-ui/core";
// import { SubmitButton } from "../../components/button/Button";
import { v4 as uuidv4 } from "uuid";
import CachedIcon from "@mui/icons-material/Cached";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import AppContext, { AppState } from "../../context/AppContext";
import "./log-in.css";
import { Box, Button } from "@mui/material";
import UserContext from "../../context/UserContext";
import InFocusContext from "../../context/InFocusContext";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import {
  getStorage,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { Firestore } from "firebase/firestore";
import UIContext from "../../context/UIContext";
export default function Index({ styledComponent }) {
  const { setWelcome } = useContext(AppContext);
  const { users, user, setUser, userInFocus, setUserInFocus } =
    useContext(UserContext);

  const { userRole, setUserRole, intro, setIntro } = useContext(UIContext);
  const { coordsInFocus } = useContext(InFocusContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {} = useContext(InFocusContext);
  const [showSignUp, setShowSignUp] = useState(false);
  const [alert, setAlert] = useState(false);
  const switchToSignUp = () => {
    if (!showSignUp) {
      setAlert("");
      setShowSignUp(true);
    } else {
      setAlert("");
      setShowSignUp(false);
    }
  };
  // useEffect(() => {
  //   setWelcome(true);
  // }, []);
  const firebaseContext = "users";
  const createUser = async (user) => {
    // console.log("user:", user.uid);

    const data = {
      basics: {
        userRole: userRole,
        userMail: email,
      },
      firestoreUserId: user.uid,
      userId: uuidv4(),
      createdAt: new Date(),
      coords: coordsInFocus,
    };

    const newRef = doc(collection(db, firebaseContext));
    await setDoc(newRef, data);

    const newUserNotifictationMail = {
      to: "anthony.zornig@gmx.de",
      message: {
        subject: "Anue Backend",
        html: `Hallo lieber Marvin, dies ist eine automatische Mail, dass sich ${email} angemeldet hat. Grüße, Nino`,
      },
    };

    const newUserNotificationRef = doc(collection(db, "newUserNotification"));
    await setDoc(newUserNotificationRef, newUserNotifictationMail);

    // console.log(data);
  };
  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: "Passwords do not match",
        type: "error",
      });
      return;
    }
    if (!email || !password) {
      setAlert({
        open: true,
        message: "fill in email and password",
        type: "error",
      });
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      )
        .then(async function (userCredential) {
          var user = userCredential.user;
          createUser(user);

          user.reload();

          sendEmailVerification(user);
          setAlert({
            open: true,
            message: `please check your mails`,
            type: "success",
          });
          // sendSignInLinkToEmail(user);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          //    console.log(errorCode, errorMessage);
        });

      setAlert({
        open: true,
        message: `sign up successfull. Welcome ${userCredential.user.email}`,
        type: "success",
      });
      // handleClose();
      return userCredential;
    } catch (error) {
      //    console.log(error);
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
      {!user ? (
        <Box sx={styledComponent.widget}>
          <Box
            sx={{
              width: "fit-content",
              height: "100%",
              maxHeight: "15rem",
              display: "flex",
              // height: "100%",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "space-between",

              // padding: "1rem",
              // backgroundColor: "blue",
            }}
          >
            {email && password && confirmPassword ? (
              <Button
                sx={styledComponent.button}
                // style={{ backgroundColor: "#EEBC1D" }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
            ) : (
              <Button
                sx={styledComponent.button}
                onClick={switchToSignUp}
                // style={{ backgroundColor: "rgba(0,0,0,0)" }}
              >
                already an account ?
              </Button>
            )}

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
                  styledComponent={styledComponent}
                />
              </>
            ) : (
              <>
                <LogIn
                  switchToSignUp={switchToSignUp}
                  setAlert={setAlert}
                  users={users}
                  user={user}
                  setUser={setUser}
                  setUserInFocus={setUserInFocus}
                  styledComponent={styledComponent}
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
            styledComponent={styledComponent}
          />
        </>
      )}
    </>
  );
}
