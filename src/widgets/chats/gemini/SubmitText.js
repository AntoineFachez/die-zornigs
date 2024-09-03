import { useState } from "react";
import { Close, HourglassBottom, Send, TextSnippet } from "@mui/icons-material";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { fetchDataFromGeminiProAPI, runChat } from "../functions";

function SubmitText({
  chatInFocus,
  inputText,
  setInputText,
  data,
  setData,
  streamedResponse,
  setStreamedResponse,
  fullResponse,
  setFullResponse,
  promptTokenConsumed,
  setPromptTokenConsumed,
  error,
  setError,
  loading,
  setLoading,
  setShowGeminiCard,
  styledComponent,
}) {
  // const API_KEY = process.env.REACT_APP_GOOGLE_GEN_AI_KEY;

  // async function fetchDataFromGeminiProAPI() {
  //   try {
  //     // ONLY TEXT
  //     if (!inputText) {
  //       alert("Please enter text!");
  //       return;
  //     }
  //     setLoading(true);
  //     const genAI = new GoogleGenerativeAI(API_KEY);
  //     const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  //     const result = await model.generateContent(inputText);
  //     const text = result.response.text();
  //     setLoading(false);
  //     setData(text);

  //     // getTextGemini(prompt, 0.5);
  //   } catch (error) {
  //     setLoading(false);
  //     setError(error);
  //     console.error("fetchDataFromGeminiAPI error: ", error);
  //   }
  // }

  return (
    <>
      <Box sx={{ height: "100%", alignItems: "space-around" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              size="small"
              type="text"
              sx={{ width: "100%" }}
              label="prompt"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />{" "}
            <IconButton
              sx={styledComponent?.iconButton?.active}
              disabled={loading}
              onClick={() =>
                runChat(
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
                )
              }
            >
              {loading ? <HourglassBottom /> : <Send />}
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SubmitText;
