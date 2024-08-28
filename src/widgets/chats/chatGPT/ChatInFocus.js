import { useContext, useEffect, useRef, useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { Box, Button, IconButton } from "@mui/material";
// import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
// import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
// import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
// import io from "socket.io-client";

import { unstable_unsupportedProp } from "@mui/utils";
import { v4 as uuidv4 } from "uuid";
// import { StoreToFirestore } from "../firebase/StoreToFirestore";
// import AnimatedText from "./AnimateChat";

// import AppContext from "../../context/AppContext";
import AppContext from "../../../context/AppContext";

// import "./ChatGPT.scss";

import {
  sendMessageToChatGPT,
  printLetterByLetter,
  splitWithIndex,
} from "../functions";
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
// import css from "highlight.js/lib/languages/css";
import html from "highlight.js/lib/languages/xml";
// hljs.registerLanguage("javascript", javascript);
// hljs.registerLanguage("css", css);
// hljs.registerLanguage("html", html);

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const systemMessage = {
  //  Explain things like you're talking to a software professional with 5 years of experience.
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};
export default function ChatGPT({ chatInFocus }) {
  const { user, chatGPTMessages, setChatGPTMessages } = useContext(AppContext);
  const [error, setError] = useState();
  // const [compiledMessagesArray, setCompiledMessagesArray] = useState([]);
  const [lastMessage, setLastMessage] = useState();
  const [code, setCode] = useState();
  const [lastMessageId, setLastMessageId] = useState(uuidv4());
  // const uuidLength = 5;
  const [isTyping, setIsTyping] = useState(false);
  const handleSend = async (message) => {
    sendMessageToChatGPT(
      message,
      chatGPTMessages,
      setChatGPTMessages,
      setIsTyping,
      setLastMessageId,
      uuidv4,
      systemMessage,
      API_KEY,
      setError,
      setLastMessage,
      lastMessageId,
    );
  };
  // const collection = "chats";
  // const dataPack = JSON.stringify(messages);
  const [isDissolving, setIsDissolving] = useState(false);
  // const [styledElement, setStyledElement] = useState({});

  window.onscroll = function () {
    if (window.pageYOffset > 0) {
      setIsDissolving(true);
    } else {
      setIsDissolving(false);
    }
  };
  // console.log(lastMessageId);
  // useEffect(() => {
  //   if (isTyping) {
  //     // const regex = /\s```/g;
  //     // console.log("IS TYPING", lastMessageId);
  //     // setStyledElement(
  //     //   document?.getElementById(lastMessageId)?.style.color === "pink"
  //     // );
  //     // console.log("StyledElement", styledElement);
  //   } else {
  //     const str =
  //       'Here is some example code:\n```\nconst greeting = "Hello, chatGPT!";\nconsole.log(greeting);\n```\nThat\'s all.';

  //     // const message = str;
  //     if (lastMessage) {
  //       const speed = 2;
  //       const message = splitWithIndex(
  //         lastMessage?.message,
  //         setCode,
  //         lastMessage,
  //         code
  //       );

  //       // const destination = str;
  //       if (message) {
  //         const destination = document.querySelector("chat-message");
  //         printLetterByLetter(destination, message, speed);
  //       }
  //       // console.log("STOPED TYPING", lastMessageId);
  //       // setStyledElement(<AnimatedText text={""} />);
  //     }
  //   }
  // }, [isTyping]);

  // useEffect(() => {
  //   console.log(code);
  //   const messageCompiler = () => {
  //     setCompiledMessagesArray();
  //   };
  // }, [code]);
  useEffect(() => {
    scrollToBottom();
  }, []);

  const scrollToBottom = () => {
    var element = document.querySelector("cs-message-list__scroll-wrapper");
    if (element) {
      // console.log(element);
      element.scrollTop = element.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [isTyping]);

  // const code = "<p>Hello, world!</p>";
  // const highlightedCode = hljs.highlight("javascript", code).value;
  console.log("chatInFocus", chatInFocus);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        height: "100%",
        // maxHeight: "100%",
        // overflow: "hidden",
        // padding: "1rem",
        backgroundColor: "#333433",
      }}
    >
      {/* {highlightCode()} */}
      <div
        style={{
          // position: "relative",
          width: "100%",
          height: "95%",

          //   maxWidth: "60ch",
          // overflow: "scroll",
        }}
      >
        <div
          style={{
            // display: "flex",
            // justifyContent: "flex-start",
            // alignContent: "flex-start",
            textAlign: "left",
            // padding: "1rem",
            color: "white",
          }}
        >
          {/* chatId: {chatInFocus.chat.chatId.slice(0, uuidLength)} */}
          {/* chatTopic: {chatInFocus.chat.topic} */}
          {/* lastMessageId: {lastMessageId.slice(0, uuidLength)} */}
        </div>{" "}
        <MainContainer
          style={{
            // width: "100%",
            // height: "100%",

            // margin: 0,
            // padding: 0,
            // left: 0,
            height: "98%",
            border: "none",
            overflow: "hidden",
          }}
        >
          <ChatContainer>
            <MessageList
              style={{ paddingBottom: "1rem" }}
              id="messageList"
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="ChatGPT is typing" />
                ) : null
              }
            >
              {chatGPTMessages.map((message, messageId) => {
                {
                }
                return (
                  <Message.CustomContent
                    id={message?.messageId}
                    key={messageId}
                    children={message?.content}
                    // model={message}

                    model={
                      message?.sender === "ChatGPT"
                        ? {
                            direction: "incoming",
                            payload: message?.message,
                          }
                        : {
                            direction: "outgoing",
                            payload: message?.message,
                          }
                    }
                  >
                    <div
                      style={
                        message?.sender === "ChatGPT"
                          ? {
                              width: "100%",
                              color: "#dddddd",
                              backgroundColor: "#1e1e1e",
                              fontFamily:
                                "Ubuntu Mono, monospace, Menlo, Monaco, Courier New, monospace",
                              fontWeight: "normal",
                              fontSize: "14px",
                              lineHeight: "21px",
                              // whiteSpace: "pre",
                              textAlign: "left",
                              padding: "1rem",
                            }
                          : {
                              width: "100%",
                              color: "#dddddd",
                              backgroundColor: "#5c5c5f",
                              fontFamily:
                                "Ubuntu Mono, monospace, Menlo, Monaco, Courier New, monospace",
                              fontWeight: "normal",
                              fontSize: "14px",
                              lineHeight: "21px",
                              // whiteSpace: "pre",
                              textAlign: "left",
                              padding: "1rem",
                            }
                      }
                    >
                      <Box>{message?.messageId}</Box>
                      <Box>{message?.sender}</Box>
                      <Box style={{}}>
                        {() => {
                          let segmented = splitWithIndex(
                            message.message,
                            setCode,
                          );
                          {
                            /* console.log(segmented); */
                          }

                          const compiledMessage = segmented?.map(
                            (segment, i) => {
                              return (
                                <>
                                  <Box
                                    key={i}
                                    style={{
                                      display: "flex",
                                      // width: "100%",
                                      // backgroundColor: "red",
                                      margin: "1rem",
                                    }}
                                  >
                                    {segment.type === "code" ? (
                                      <pre
                                        style={{
                                          display: "flex",
                                          flexWrap: "wrap",
                                          width: "100%",
                                          backgroundColor: "black",
                                        }}
                                      >
                                        <code className="code">
                                          {segment.segment}
                                        </code>

                                        {/* <code
                                        dangerouslySetInnerHTML={{
                                          __html: highlightedCode,
                                        }}
                                      /> */}
                                      </pre>
                                    ) : (
                                      <Box
                                        style={{
                                          display: "flex",
                                          flexWrap: "wrap",
                                          width: "100%",
                                          backgroundColor: "#1d1d1d",
                                          lineBreak: "auto",
                                        }}
                                      >
                                        {segment.segment}
                                      </Box>
                                    )}
                                    {/* {message?.message} */}
                                    {/* code: {code} */}
                                    {/* `${message?.message}` message?.message */}
                                  </Box>
                                </>
                              );
                            },
                          );
                          return compiledMessage;
                        }}
                      </Box>
                      {/* <span className="chat-message" id={message.messageId}>
                        {code}
                      </span> */}
                    </div>
                    {/* {message.sender === "ChatGPT" ? "" : ""} {message.message} */}
                    {/* </Message.CustomContent> */}
                  </Message.CustomContent>
                );
              })}
            </MessageList>
            <MessageInput
              style={{
                textAlign: "left",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // width: "80%",
                // margin: 0,

                // padding: 0,
                // left: 0,
                // bottom: "1rem",
                border: "none",
                backgroundColor: "#333433",
              }}
              placeholder="type"
              onSend={handleSend}
              // onSend={(message) => console.log(message)}
            />
          </ChatContainer>
        </MainContainer>
        {error && (
          <div
            style={{
              zIndex: "10",
              // position: "fixed",
              maxWidth: "100%",
              padding: "1rem",
              bottom: 0,
              color: "white",
              backgroundColor: "red",
            }}
          >
            error: {error}
          </div>
        )}
      </div>
    </div>
  );
}
