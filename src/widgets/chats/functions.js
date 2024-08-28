import { useContext } from "react";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { TextDecoder } from "web-encoding"; // For decoding chunks

import { vertexAI, model } from "../../firebase/firebase";
import CodeBlock from "../../components/codeBlock/Index";
const API_KEY = process.env.REACT_APP_GOOGLE_GEN_AI_KEY;
export function splitWithIndex(str, setCode) {
  const regex = /```([\s\S]*?)```/;
  let segments = str.split(regex);
  let result = [];

  for (let i = 0; i < segments.length; i++) {
    const matches = str?.match(regex);

    if (matches) {
      const tempCode = matches[1];
      setCode(tempCode);

      result.push({
        index: i,
        type: matches[1] === segments[i] && "code",
        segment: segments[i],
      });
    } else {
      result.push({ index: i, type: "comment", segment: segments[i] });
    }
  }

  return result;
}

export const printLetterByLetter = (destination, message, speed) => {
  var i = 0;

  if (i > message.length) {
    // console.log(message.length);
    var interval = setInterval(function () {
      document.getElementById(destination).innerHTML += message.charAt(i);
      i++;
      clearInterval(interval);
    }, speed);
  }

  // console.log(messages.slice(-1)[0].message);
};
export const sendMessageToChatGPT = async (
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
) => {
  const newMessage = {
    message,
    direction: "outgoing",
    sender: "user",
  };

  const newMessages = [...chatGPTMessages, newMessage];

  setChatGPTMessages(newMessages);
  // Initial system message to determine ChatGPT functionality
  // How it responds, how it talks, etc.
  setIsTyping(true);

  await processMessageToChatGPT(
    newMessages,

    systemMessage,
    API_KEY,
    setError,
    setLastMessage,
    lastMessageId,
    setChatGPTMessages,
    setIsTyping,
  );
  setLastMessageId(uuidv4);
};

async function processMessageToChatGPT(
  chatMessages,
  systemMessage,
  API_KEY,
  setError,
  setLastMessage,
  lastMessageId,
  setChatGPTMessages,
  setIsTyping,
) {
  // messages is an array of messages
  // Format messages for chatGPT API
  // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
  // So we need to reformat

  let apiMessages = chatMessages?.map((messageObject) => {
    let role = "";
    if (messageObject.sender === "ChatGPT") {
      role = "assistant";
    } else {
      role = "user";
    }
    return { role: role, content: messageObject.message };
  });

  // Get the request body set up with the model we plan to use
  // and the messages which we formatted above. We add a system message in the front to'
  // determine how we want chatGPT to act.
  const apiRequestBody = {
    model: "gpt-3.5-turbo",
    messages: [
      systemMessage, // The system message DEFINES the logic of our chatGPT
      ...apiMessages, // The messages from our chat with ChatGPT
    ],
  };

  await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(apiRequestBody),
  })
    .then((data) => {
      // console.log(data);
      return data.json();
    })
    .then((data) => {
      if (data?.error?.message) {
        setError(data?.error?.message);
      } else {
        // console.log(lastMessageId);
        // console.log(lastMessageId);
        setLastMessage({
          message: data?.choices[0].message.content,
          sender: "ChatGPT",
          messageId: lastMessageId,
        });
        setChatGPTMessages([
          ...chatMessages,
          {
            message: data?.choices[0].message.content,
            sender: "ChatGPT",
            messageId: lastMessageId,
          },
        ]);
        setIsTyping(false);
      }
    });
}
export async function fetchDataFromGeminiProAPI(
  chatInFocus,
  inputText,
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
) {
  try {
    // ONLY TEXT
    if (!inputText) {
      alert("Please enter text!");
      return;
    }
    setLoading(true);
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
    });
    const { totalTokens, totalBillableCharacters } =
      await model.countTokens(inputText);
    setPromptTokenConsumed({
      totalTokens: totalTokens,
      totalBillableCharacters: totalBillableCharacters,
    });
    // console.log(
    //   `Total tokens: ${totalTokens}, total billable characters: ${totalBillableCharacters}`,
    // );
    let response = "";
    const result = await model.generateContentStream(inputText);
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      // console.log("chatInFocus", chunkText);
      // data.push(chunkText);

      // Update states with each chunk
      response += chunkText;
      setData((prevText) => prevText + chunkText);
      streamedResponse?.push(chunkText);
    }
    // console.log("streamedResponse", streamedResponse);
    // const text = result.response.text();
    setLoading(false);
    setFullResponse(result);

    chatInFocus?.history?.push(
      {
        role: "user",
        parts: [
          {
            text: inputText,
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: response,
          },
        ],
      },
    );
    setStreamedResponse();
    // getTextGemini(prompt, 0.5);
  } catch (error) {
    setLoading(false);
    setError(error);
    console.error("fetchDataFromGeminiAPI error: ", error);
  }
}
export const runChat = async (
  maxOutputTokens,
  chatInFocus,
  inputText,
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
) => {
  try {
    if (!inputText) {
      alert("Please enter text!");
      return;
    }
    setLoading(true);
    const chat = model.startChat({
      history: chatInFocus?.history,
      generationConfig: {
        maxOutputTokens: maxOutputTokens,
      },
    });

    const { totalTokens, totalBillableCharacters } =
      await model.countTokens(inputText);
    setPromptTokenConsumed({
      totalTokens: totalTokens,
      totalBillableCharacters: totalBillableCharacters,
    });
    // console.log(
    //   `Total tokens: ${totalTokens}, total billable characters: ${totalBillableCharacters}`,
    // );

    let response = "";
    const result = await chat.sendMessageStream(inputText);
    // console.log("streamedResponse", result);
    for await (const chunk of result.stream) {
      const chunkText = chunk.candidates[0].content.parts[0].text;
      // console.log("streamedResponse", chunkText);
      // data.push(chunkText);

      // Update states with each chunk
      response += chunkText;
      // console.log("streamedResponse", response);
      setStreamedResponse(response);
    }
    // for await (const chunk of result.stream) {
    //     const chunkText = chunk.text();
    //     console.log("chatInFocus", chunkText);
    //     // data.push(chunkText);

    //     // Update states with each chunk
    //     response += chunkText;
    //     // setData((prevText) => prevText + chunkText);
    //     console.log(chunk);
    //     // setStreamedResponse((prevChunks) => [...prevChunks, chunkText]);
    //     // setStreamedResponse((prevText) => prevText + chunkText);
    //     // streamedResponse.push(chunkText);
    //   }
    // console.log("streamedResponse", streamedResponse);
    // const text = result.response.text();
    setLoading(false);
    // setFullResponse(result);

    chatInFocus?.history?.push(
      {
        role: "user",
        parts: [
          {
            text: inputText,
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: response,
          },
        ],
      },
    );
    setStreamedResponse();
    // getTextGemini(prompt, 0.5);
  } catch (error) {
    setLoading(false);
    setError(error);
    console.error("fetchDataFromGeminiAPI error: ", error);
  }

  setLoading(false);
};
export const handleFormatResponse = (
  textToBeFormatted,
  // setFormattedText,
  Typography,
  Box,
  styledComponent,
) => {
  const enclosedPatternRegex = /```(.*?)```/gs;
  // const parts = streamedResponse?.join("")?.split(enclosedPatternRegex);
  const parts = textToBeFormatted?.split(enclosedPatternRegex);
  console.log("textToBeFormattedCode", parts);
  const formattedParts = parts?.map((part, index) => {
    if (index % 2 === 0) {
      // console.log("textToBeFormatted", textToBeFormatted?.split(parts));
      const paragraphs = part?.split("\n\n");
      // console.log("streamedResponse", paragraphs);
      const formattedParagraphs = paragraphs?.map((paragraph, index) => {
        // if (index % 2 === 0) {
        // Split each paragraph into lines
        const lines = paragraph.split("\n");
        const formattedLines = lines.map((line, lineIndex) => {
          if (line?.startsWith("##")) {
            // Handle lines starting with double asterisks as headings
            return (
              <Typography key={lineIndex} variant="h3">
                {line?.replace(/##/g, "")}
              </Typography>
            );
          } else if (line?.startsWith("* ")) {
            if (line?.startsWith("**")) {
              // Handle lines starting with asterisks as list items
              return (
                <Box sx={{ padding: "0rem 0 0 2rem" }}>
                  <Typography key={lineIndex} variant="h5">
                    {line?.substring(2)?.replace(/\*\*/g, ``)}
                    {lineIndex}
                  </Typography>
                </Box>
              );
            } else {
              return (
                <Typography key={lineIndex} variant="h6">
                  <Box
                    sx={{
                      padding: "0rem 0 0 2rem",
                    }}
                  >
                    {line?.substring(2)?.replace(/\*\*/g, ``)}
                  </Box>
                </Typography>
              ); // Remove the "* "
            }
          } else if (line?.startsWith("**")) {
            // Handle lines starting with double asterisks as headings
            return (
              <Box sx={{ padding: "0rem 0 0 1rem" }}>
                <Typography key={lineIndex} variant="body1">
                  {line?.replace(/\*\*/g, "")}
                </Typography>
              </Box>
            ); // Remove the "**"
          } else {
            // Other lines are regular text
            return (
              <Box sx={{ padding: "0rem 0rem 0.5rem 0.5rem" }}>
                <Typography
                  key={lineIndex}
                  variant="body1"
                  sx={
                    line.length > 300
                      ? { ...styledComponent?.truncate, fontSize: "0.4rem" }
                      : { ...styledComponent?.textBody, fontSize: "0.8rem" }
                  }
                >
                  {line}
                </Typography>
              </Box>
            );
          }
        });
        // Wrap list items in a <ul> if needed
        if (formattedLines.some((line) => line?.type === "li")) {
          return (
            <ul key={index}>
              <Typography
                sx={{ ...styledComponent?.textBody, fontSize: "0.8rem" }}
                key={formattedLines}
                variant="body1"
              >
                {formattedLines}
              </Typography>
            </ul>
          );
        } else {
          return formattedLines;
          // Otherwise, just return the formatted lines
        }
      });
      return formattedParagraphs;
    } else {
      const language = part.split("\n")[0];
      const code = part.replace(`json `, "");
      // console.log("textToBeFormattedCode", code);
      // const code = JSON.stringify(part.split("json ")[1]);
      return (
        <CodeBlock
          content={code}
          language="json"
          styledComponent={styledComponent}
        />
      );
      // if (language === "json") {
      //   // Handle JSON code blocks
      //   return <CodeBlock content={code} language="json" />;
      // }
    }
    // return null;
  });
  return formattedParts;
  // setFormattedText(formattedParts);
};
export const fetchDataFromGeminiProVisionAPI = async (
  inputText,
  setLoading,
  setData,
  setError,
) => {
  try {
    // TEXT AND FILE
    if (!inputText) {
      alert("Please load an image!");
      return;
    }
    setLoading(true);
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const fileInputEl = document.querySelector("input[type=file]");
    const imageParts = await Promise.all(
      [...fileInputEl.files].map(fileToGenerativePart),
    );
    const result = await model.generateContent([inputText, ...imageParts]);
    const text = result.response.text();

    setLoading(false);
    setData(text);
  } catch (error) {
    setLoading(false);
    setError(error);
    console.error("fetchDataFromGeminiAPI error: ", error);
  }
};

async function fileToGenerativePart(file) {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
}
// export async function fetchDataFromGeminiProAPI(
//   inputText,
//   setLoading,
//   setData,
//   setError,
// ) {
//   try {
//     if (!inputText) {
//       alert("Please enter text!");
//       return;
//     }
//     setLoading(true);

//     const genAI = new GoogleGenerativeAI(API_KEY);
//     const model = genAI.getGenerativeModel({
//       model: "gemini-1.5-pro",
//       // stream: true, // Enable streaming
//     });

//     // Initiate the request
//     const response = await model.generateContent(inputText);

//     // Handle the ReadableStream
//     const reader = response.response.getReader();
//     const decoder = new TextDecoderStream();
//     const readableStream = reader.pipeThrough(decoder);
//     const textDecoder = new TextDecoder();

//     let accumulatedText = "";

//     for await (const chunk of readableStream) {
//       const chunkText = textDecoder.decode(chunk);
//       accumulatedText += chunkText;
//       setData(accumulatedText); // Update the UI with each chunk
//     }

//     setLoading(false);
//   } catch (error) {
//     setLoading(false);
//     setError(error);
//     console.error("fetchDataFromGeminiAPI error:", error);
//   }
// }
