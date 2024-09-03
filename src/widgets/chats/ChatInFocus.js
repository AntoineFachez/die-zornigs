import React, { useEffect, useRef, useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  InputToolbox,
  AttachmentButton,
  SendButton,
} from "@chatscope/chat-ui-kit-react";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  fetchDataFromGeminiProVisionAPI,
  handleFormatResponse,
  runChat,
} from "./functions";

import geminiIcon from "../../assets/icons/GeminiIcon.png";
import { Box, IconButton, Typography } from "@mui/material";
import { Backup, Cloud, Save, Send, Store, Upload } from "@mui/icons-material";
import CodeBlock from "../../components/codeBlock/Index";
export default function Chat({
  maxOutputTokens,
  chatInFocus,
  data,
  setData,
  streamedResponse,
  setStreamedResponse,
  fullResponse,
  setFullResponse,
  promptInputText,
  setPromptInputText,
  loading,
  setLoading,
  promptTokenConsumed,
  setPromptTokenConsumed,
  messageInFocus,
  setMessageInFocus,
  handleStoreChat,
  setError,
  styledComponent,
}) {
  const messageInputRef = useRef();
  console.log("promptTokenConsumed", promptTokenConsumed);
  const [formattedText, setFormattedText] = useState(streamedResponse);
  console.log("loading", loading);
  useEffect(() => {
    // handleFormatResponse(formattedText, setFormattedText, Typography, Box);
    return () => {};
  }, [streamedResponse]);
  const handleSelectMessage = (message) => {
    setMessageInFocus(message);
  };
  const handleInputChange = (textContent) => {
    // Use the textContent here to update your component's state or perform other actions
    setPromptInputText(textContent);
    console.log("Current text content:", textContent);

    // Example: Update a state variable with the text content
    // setTextMessage(textContent);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative !important",
        overflow: "scroll",
        // "& >*": { padding: 0, margin: 0, fontSize: "0.4rem" },
        "& .scrollbar-container": {
          // backgroundColor: "hotpink",
          height: "100%", // padding: "1rem",
          overflow: "scroll",
        },
        "& .cs-message-list__scroll-wrapper": {
          // backgroundColor: "hotpink",
          height: "100%", // padding: "1rem",
          overflow: "scroll",
        },
        "& .cs-message__content": {
          // fontSize: "0.4rem",
          // backgroundColor: "hotpink",
          // height: "100%",
          padding: "0rem",
          // border: "none",
          // overflow: "scroll",
        },
      }}
      className="widget"
    >
      {" "}
      <MainContainer>
        <ChatContainer>
          <MessageList>
            <Box sx={{}}>
              {chatInFocus?.history?.map((utterance, i) => (
                <>
                  {utterance?.parts?.map((part) => (
                    <>
                      <Box
                        sx={{
                          width: "100%",
                          height: "fit-content",
                          display: "flex",
                          flexDirection: "row",
                          // padding: "0rem 0rem 2rem 0rem",
                        }}
                        onClick={() => handleSelectMessage(utterance)}
                      >
                        <Message
                          model={{
                            message: part?.text,
                            sentTime: "just now",
                            sender: utterance?.role,
                            direction:
                              utterance?.role === "model"
                                ? "incoming"
                                : "outgoing",
                          }}
                        >
                          {/* <Avatar
                            name={utterance?.role}
                            src={utterance?.role === "model" ? geminiIcon : ""}
                            sx={{ width: 24, height: 24 }}
                          /> */}
                          <Message.CustomContent>
                            {/* <Box sx={{ maxWidth: "80%" }}> */}{" "}
                            <Box
                              sx={{
                                padding: 0,
                                margin: 0,
                                "& >*": {
                                  padding: 0,
                                  margin: 0,
                                  fontSize: "0.4rem",
                                },
                              }}
                            >
                              {handleFormatResponse(
                                part?.text,
                                Typography,
                                Box,
                                styledComponent,
                              )}
                            </Box>{" "}
                            {/* {part?.text} */}
                            {/* {formattedText} */}
                            {/* <CodeBlock content={part?.text} language="json" /> */}
                            {/* </Box> */}
                          </Message.CustomContent>{" "}
                        </Message>
                      </Box>
                    </>
                  ))}
                </>
              ))}
            </Box>
          </MessageList>
          {/* <Box
            // className="widget"
            sx={{
              // position: "absolute",
              width: "100%",
              height: "100%",
              bottom: "0",
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
            }}
          > */}{" "}
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
          {/* <MessageInput
            value={promptInputText}
            // onChange={handleInputChange}
            ref={messageInputRef}
            disabled={false}
            autoFocus={true}
            sendOnReturnDisabled={false} //Prevent that the input message is sent on a return press
            sendDisabled={loading}
            // fancyScroll
            // activateAfterChange

            // onChange
            // sendButton={
            //   <>
            //     <IconButton>
            //       <Send />
            //     </IconButton>
            //   </>
            // }
            // attachButton
            // attachDisabled
            onAttachClick={() =>
              fetchDataFromGeminiProVisionAPI(
                promptInputText,
                setLoading,
                setData,
                setError,
              )
            }
            placeholder="Type message here"
            onSend={() =>
              runChat(
                chatInFocus,
                promptInputText,
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
          /> */}
          {/* </Box> */}
        </ChatContainer>
      </MainContainer>
    </Box>
  );
}
