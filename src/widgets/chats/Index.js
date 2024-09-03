import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { Add, Backup } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";

import AppContext from "../../context/AppContext";
import UserContext from "../../context/UserContext";
import DataContext from "../../context/DataContext";
import UIContext from "../../context/UIContext";
import InFocusContext from "../../context/InFocusContext";
import SearchContext from "../../context/SearchContext";
import ChatContext from "../../context/ChatContext";

import {
  getDocIdSByValueSearch,
  handleUpdateDoc,
  submitToFirestore,
} from "../../firebase/helperFunctions";
import { fetchDataFromGeminiProVisionAPI, runChat } from "./functions";

import WidgetIndexTemplate from "../WidgetIndexTemplate";
// import ChatGPT from "./chatGPT/Index";
// import GeminiText from "./gemini/SubmitText";
// import GeminiImage from "./gemini/SubmitImage";
import MenuChats from "./MenuChats";
import Console from "./gemini/Console";
import Selector from "./gemini/Selector";
import Chats from "./Chats";
import ChatInFocus from "./ChatInFocus";
import Message from "./Message";
import { MessageInput } from "@chatscope/chat-ui-kit-react";

// import prompts from "../../assets/data/mockData/chats.json";
import "./ChatInFocus.scss";

const Index = memo(
  ({
    startUpWidgetLayout,
    generated,
    passWidgetContext,
    setPassWidgetContext,
    uiContext,
    contextSpaces,
    contextToolBar,
    dynamicComponent,
    styledComponent,
  }) => {
    const {
      appContext,
      setAppContext,
      widgetActive,
      setWidgetActive,
      widgetActiveBottomLeft,
      setWidgetActiveBottomLeft,
      setWidgetActiveWidget,
      chatGPTMessages,
      setWidgetActiveBottomRight,
    } = useContext(AppContext);
    const {
      setDataContext,
      universities,
      videos,
      coursesOfStudies,
      chats,
      setChats,
    } = useContext(DataContext);
    const { chatInFocus, setChatInFocus, messageInFocus, setMessageInFocus } =
      useContext(InFocusContext);
    const {
      promptInputText,
      setPromptInputText,
      chatContext,
      streamedResponse,
      setStreamedResponse,
      fullResponse,
      setFullResponse,
      promptTokenConsumed,
      setPromptTokenConsumed,
    } = useContext(ChatContext);
    // const { setPromptInFocus, universityInFocus } = useContext(InFocusContext);
    const {
      showVideo,
      setShowVideo,
      showNewItem,
      showSearchChat,
      setShowSearchChat,
    } = useContext(UIContext);
    const { searchString, setSearchString } = useContext(SearchContext);
    const { maxOutputTokens } = useContext(UserContext);

    const messageInputRef = useRef();

    const [selectedWidgetContext, setSelectedWidgetContext] =
      useState(passWidgetContext);
    const collection = "chats";
    const widgetProps = {
      appContext: "chats",
      collection: collection,
      uiContext: uiContext,
      itemContext: "chat",
      dropWidgetName: "Chats",
      selectedWidgetContext: selectedWidgetContext,
    };

    const firestoreContext = collection;
    const [data, setData] = useState([undefined]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const [showGeminiCard, setShowGeminiCard] = useState("text");
    // const [inputField, setInputField] = useState(null);

    const handleSetAppContext = () => {
      if (uiContext === "home") {
        setShowVideo((prev) => !prev);
        setSelectedWidgetContext("flexList");
        setAppContext("read");
      } else if (!showVideo) {
        setShowVideo((prev) => !prev);
        setAppContext(collection);
        setDataContext(collection);
      } else if (appContext === "grid") {
      } else if (appContext === "showNewItem") {
      }
    };
    const handleSelectWidgetContext = (context) => {
      if (generated) {
        setPassWidgetContext(context);
      }
      setSelectedWidgetContext(context);
      if (passWidgetContext !== context) {
        //TODO: if widgetContext of former widget is different to the new one's then dialogue:"wanna keep table view or set to default view of component?
      } else {
      }
    };

    const handleInputChange = (textContent) => {
      // Use the textContent here to update your component's state or perform other actions
      setPromptInputText(textContent);
    };
    const handleNewChat = async () => {
      const data = {
        chatId: uuidv4(),
        title: "latest  chat",
        createdAt: new Date(),
        summery: "",
        history: [
          {
            role: "user",
            parts: [
              {
                text: "In the next prompt you will recieve instructions. The aim for you is to return a response that contains only the json. You will be provided furthermore with data.",
              },
            ],
          },
          {
            role: "model",
            parts: [{ text: "hi." }],
          },
        ],
      };
      submitToFirestore({
        //firestoreContext, data, setItemInFocus, setter, setSetter
        dataPack: {
          firestoreContext,
          data,
          setChatInFocus,
          chats,
          setChats,
          // uploadFileUrl: data.uploadFileUrl || "",
        },
      });
    };
    const handleStoreChat = async (data) => {
      const parentCollectionName = collection;
      let queryField;

      let searchString;
      searchString = data?.chatId;
      queryField = "chatId";

      const parentDoc = await getDocIdSByValueSearch(
        parentCollectionName,
        queryField,
        searchString,
      );
      if (parentDoc?.parentId) {
        handleUpdateDoc(parentCollectionName, parentDoc?.parentId, data);
      } else {
        submitToFirestore({
          //firestoreContext, data, setItemInFocus, setter, setSetter
          dataPack: {
            firestoreContext,
            data,
            setChatInFocus,
            chats,
            setChats,
            // uploadFileUrl: data.uploadFileUrl || "",
          },
        });
      }
    };
    useEffect(() => {
      // initiateChat();
      // console.log("chats", chats);
      // setChatInFocus(chats?.history[0]);
      return () => {};
    }, [chats]);
    const menu = (
      <MenuChats
        appContext={appContext}
        setAppContext={setAppContext}
        setWidgetActive={setWidgetActive}
        handleSelectWidgetContext={handleSelectWidgetContext}
        searchString={searchString}
        // handleSearch={handleSearch}
        // handleFilterEntities={handleFilterEntities}
        // loading={loading}
        // getAllentitiesTypes={getAllentitiesTypes}
        // handlePaste={handlePaste}
        // handleSubmit={handleSubmit}
        styledComponent={styledComponent}
      />
    );
    // const chatGPT = <ChatGPT styledComponent={styledComponent} />;

    // const gemini = (
    //   <Box className="widget" sx={styledComponent?.widget}>
    //     <Console
    //       // inputField={inputField}
    //       // setInputField={setInputField}
    //       styledComponent={styledComponent}
    //     />{" "}
    //     {/* <AICodeBody styledComponent={styledComponent} /> */}
    //     {/* <DialogueFlow styledComponent={styledComponent} /> */}
    //   </Box>
    // );
    const flexList = (
      <>
        <Chats
          button={""}
          data={chats}
          chatInFocus={chatInFocus}
          setChatInFocus={setChatInFocus}
          styledComponent={styledComponent}
        />
      </>
    );
    const promtWithChat = (
      <>
        <Box
          // className="widget"
          sx={{
            zIndex: 1000,
            position: "absolute",
            top: "0rem",
            right: "0.5rem",
            width: "fit-content",
            height: "fit-content",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Typography sx={{ color: "white" }}>
            maxToken: {maxOutputTokens}
          </Typography>
          {chatInFocus && (
            <Tooltip title="Store Chat">
              <IconButton
                sx={styledComponent?.iconButton?.action}
                onClick={() => handleStoreChat(chatInFocus)}
              >
                <Backup />
              </IconButton>
            </Tooltip>
          )}

          <IconButton
            sx={styledComponent?.iconButton?.action}
            onClick={() => handleNewChat()}
          >
            <Add />
          </IconButton>
        </Box>
        {chatInFocus ? (
          <ChatInFocus
            maxOutputTokens={maxOutputTokens}
            chatInFocus={chatInFocus}
            data={data}
            setData={setData}
            streamedResponse={streamedResponse}
            setStreamedResponse={setStreamedResponse}
            fullResponse={fullResponse}
            setFullResponse={setFullResponse}
            promptInputText={promptInputText}
            setPromptInputText={setPromptInputText}
            loading={loading}
            setLoading={setLoading}
            promptTokenConsumed={promptTokenConsumed}
            setPromptTokenConsumed={setPromptTokenConsumed}
            messageInFocus={messageInFocus}
            setMessageInFocus={setMessageInFocus}
            handleStoreChat={handleStoreChat}
            setError={setError}
            styledComponent={styledComponent}
          />
        ) : (
          flexList
        )}
      </>
    );
    const response = (
      <Box className="widget" sx={styledComponent?.widget}>
        <Message
          data=""
          setData={setData}
          streamedResponse=""
          setStreamedResponse={setStreamedResponse}
          fullResponse={fullResponse}
          setFullResponse={setFullResponse}
          promptInputText={promptInputText}
          setPromptInputText={setPromptInputText}
          loading={loading}
          setLoading={setLoading}
          messageInFocus={messageInFocus}
          setMessageInFocus={setMessageInFocus}
          setError={setError}
          styledComponent={styledComponent}
        />
      </Box>
    );

    const selector = (
      <Selector
        setShowGeminiCard={setShowGeminiCard}
        showGeminiCard={showGeminiCard}
        direction="row"
      />
    );
    const inputBox = (
      <Box className="widget" sx={styledComponent?.widget}>
        <Box
          // className="widget"
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#444",
            color: "#fff",
            "& .cs-message-input": {
              height: "100%",
              maxHeight: "none",
            },
            "& .cs-message-input__content-editor-container": {
              height: "100%",
              maxHeight: "none",
            },
            "& .cs-button--attachment": {
              color: styledComponent?.iconButton?.action?.color,
            },
            "& .cs-button--send": {
              color: styledComponent?.iconButton?.action?.color,
            },
          }}
        >
          <MessageInput
            ref={messageInputRef}
            placeholder="Type message here..."
            onChange={handleInputChange}
            value={promptInputText}
            sendDisabled={loading}
            onSend={(textContent) =>
              runChat(
                maxOutputTokens,
                chatInFocus,
                textContent,
                setLoading,
                data,
                setData,
                streamedResponse,
                setStreamedResponse,
                fullResponse,
                setFullResponse,
                promptTokenConsumed,
                setPromptTokenConsumed,
                setError,
              )
            }
          />
        </Box>
      </Box>
    );
    return (
      <>
        <WidgetIndexTemplate
          widgetProps={widgetProps}
          selectedArrayItems={chatGPTMessages}
          uiContext={uiContext}
          widgetContext={selectedWidgetContext}
          contextSpaces={contextSpaces}
          contextToolBar={contextToolBar}
          iconButton={<ChatIcon />}
          onClick={handleSetAppContext}
          menu={menu}
          vertical={inputBox}
          inputField={inputBox}
          selector={selector}
          soloWidget={response}
          flexList={flexList}
          // table={table}
          // chip={chip}
          singleItem={promtWithChat}
          // soloWidget={standinWidget}
          // soloWidget={selectedWidgetContext === "chatGPT" ? chatGPT : gemini}
          // singleItem={selectedWidgetContext === "chatGPT" ? chatGPT : gemini}
          // widgetTopLeftTop={<Widget />}
          // widgetBottom={widgetActive}
          // bottomWidget={widgetActive}
          // dropWidget="ml"
          dynamicComponent={dynamicComponent}
          activeWidgetName={collection}
          styledComponent={styledComponent}
        />
      </>
    );
  },
);
export default Index;
