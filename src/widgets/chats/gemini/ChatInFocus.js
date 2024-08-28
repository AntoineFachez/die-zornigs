import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import geminiIcon from "../../../assets/icons/GeminiIcon.png";
import { handleFormatResponse } from "../functions";
import Message from "../Message";
export default function ChatInFocus({
  chatInFocus,
  data,
  setData,
  streamedResponse,
  setStreamedResponse,
  fullResponse,
  setFullResponse,
  promptInputText,
  setPromppromptInputText,
  loading,
  setLoading,
  styledComponent,
}) {
  console.log("chatInFocus", chatInFocus);
  const [formattedText, setFormattedText] = useState();
  const responseContainerRef = useRef(null);
  const contentEndRef = useRef(null);

  useEffect(() => {
    // Split the response into code blocks and regular text
    setFormattedText(streamedResponse);
    // handleFormatResponse(streamedResponse, setFormattedText, Typography, Box);

    return () => {};
  }, [streamedResponse]);
  console.log("formattedText", formattedText);
  return (
    <Box sx={{ width: "100%", height: "100%", flexDirection: "row" }}>
      {chatInFocus?.chatId}
      {chatInFocus?.history?.map((utternance, i) => (
        <>
          {/* {utternance?.role} */}

          <Box
            key={i}
            sx={{ display: "flex", flexDirection: "row", padding: "1rem" }}
          >
            <Box sx={{ width: "5rem" }}>
              {utternance?.role === "model" ? (
                <img
                  style={{ width: "2rem", height: "2rem" }}
                  src={geminiIcon}
                  alt="gemini-icon"
                />
              ) : (
                "user"
              )}
            </Box>
            <Box sx={{ width: "100%", height: "100%" }}>
              {utternance?.parts.map((part, j) => (
                <Box key={j} sx={styledComponent?.textBody}>
                  {data && (
                    <Message
                      data={part.text}
                      setData={setData}
                      streamedResponse={part.text}
                      setStreamedResponse={setStreamedResponse}
                      fullResponse={fullResponse}
                      setFullResponse={setFullResponse}
                      promptInputText={promptInputText}
                      setPromppromptInputText={setPromppromptInputText}
                      loading={loading}
                      setLoading={setLoading}
                      styledComponent={styledComponent}
                    />
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </>
      ))}{" "}
      {streamedResponse}
    </Box>
  );
}
