import React, { useContext, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import ChatGPT from "./ChatInFocus";
import Chats from "./Chats";
import NewChat from "./NewChat";
import { v4 as uuidv4 } from "uuid";
// import StoreToFirestore from "../firebase/StoreToFirestore";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../../../firebase/firebase";

// import { UpdateArrray } from "../../../firebase/UpdateFirestoreArray";
import AppContext from "../../../context/AppContext";
// import "./ChatGPT.scss";
import InFocusContext from "../../../context/InFocusContext";

export default function Index({ appContext, styledComponent }) {
  const { chatInFocus, setChatInFocus } = useContext(InFocusContext);
  const { messages } = useContext(AppContext);
  const [chatInFocusId, setChatInFocusId] = useState();
  // const [chatInFocus, setChatInFocus] = useState({
  //   chat: { title: "someChat", chatId: chatInFocusId },
  //   messages: [],
  // });
  const firestoreContext = "chats";

  // const [dataPack, setDataPack] = useState({
  //   data: {
  //     firestoreContext: firestoreContext,
  //     // firestoreDocId: dataPack?.data?.firestoreDocId
  //     //   ? { firestoreDocId: dataPack?.data?.firestoreDocId }
  //     //   : { firestoreDocId: uuidv4() },
  //     firestoreDocId: uuidv4(),
  //     chat: chatInFocus,
  //   },
  // });
  // const chatGPT__ChatScheme = {
  //   chatId: chatInFocus?.chat?.chatId,
  //   title: chatInFocus?.chat?.title,
  //   createdAt: new Date(),
  //   status: "just entered",
  //   // messages: [chatInFocus?.messages?.message],
  // };

  // setChatInFocus({
  //   chat: { title: "someChat", chatId: chatInFocus.chat.chatId },
  //   messages: [chatInFocus.messages],
  // });

  const chatGPT__MessagesScheme = {
    // messageId: chatInFocus?.messages?.messageId,
    id: "9kyiZsJRh4GT8fEw1gcK",
    chat: {
      messages: chatInFocus?.messages,
      createdAt: chatInFocus?.messages?.createdAt,
      status: "just entered",
      title: chatInFocus?.messages?.title,
    },
    // messagesIds: chatInFocus.messages,
  };
  const handleSubmitChat = () => {
    // console.log(chatInFocus);
    // StoreToFirestore({
    //   dataPack: {
    //     firestoreContext: firestoreContext,
    //     // firestoreDocId: dataPack?.data?.firestoreDocId
    //     //   ? { firestoreDocId: dataPack?.data?.firestoreDocId }
    //     //   : { firestoreDocId: uuidv4() },
    //     firestoreDocId: uuidv4(),
    //     // data: JSON.stringify(chatInFocus),
    //     data: chatGPT__ChatScheme,
    //     setElementInFocus: setChatInFocus,
    //   },
    // });
    // console.log(
    //   firestoreContext,
    //   // chatInFocus.chat.firestoreDocId,
    //   chatGPT__MessagesScheme,
    // );
    // UpdateArrray({
    //   dataPack: {
    //     firestoreContext: firestoreContext,
    //     // firestoreDocId: dataPack?.data?.firestoreDocId
    //     //   ? { firestoreDocId: dataPack?.data?.firestoreDocId }
    //     //   : { firestoreDocId: uuidv4() },
    //     firestoreDocId: "9kyiZsJRh4GT8fEw1gcK",
    //     // data: JSON.stringify(chatInFocus),
    //     message: messages[0].message,
    //     setElementInFocus: setChatInFocus,
    //   },
    // });
    // for (let i = 0; i < messages.length; i++) {
    //   const element = messages[i];
    //   StoreToFirestore({
    //     dataPack: {
    //       firestoreContext: "messages",
    //       // firestoreDocId: dataPack?.data?.firestoreDocId
    //       //   ? { firestoreDocId: dataPack?.data?.firestoreDocId }
    //       //   : { firestoreDocId: uuidv4() },
    //       firestoreDocId: uuidv4(),
    //       // data: JSON.stringify(chatInFocus),
    //       data: chatGPT__MessagesScheme,
    //     },
    //   });
    // }
  };
  const button = (
    <Button
      onClick={handleSubmitChat}
      style={{
        // zIndex: "100",
        //   position: "absolute",
        // left: 0,
        // bottom: 0,
        // width: "min-content",
        padding: 0,
        margin: 0,
        width: "3rem",
        height: "3rem",
        color: "white",
      }}
    >
      <SaveAltIcon />
    </Button>
  );

  useEffect(() => {
    setChatInFocusId(uuidv4());
  }, []);
  return (
    <>
      {appContext === "app-sideBar" ? (
        <Box
          sx={{
            //   width: "40ch",
            height: "100%",
            // height: "inherit",
            //   backgroundColor: "#343541",
            // padding: "0.5rem",
          }}
        >
          <NewChat />
          <Chats button={button} />
        </Box>
      ) : (
        <>
          {/* <Box sx={styledComponent?.widget} className="widget"> */}
          <ChatGPT chatInFocus={chatInFocus} />
          {/* </Box> */}
        </>
      )}
    </>
  );
}
