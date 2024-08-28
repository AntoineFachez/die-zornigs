import { Box, Button, ButtonBase, Typography } from "@mui/material";
import React from "react";
// import { data } from "./MockData";

export default function Chats({ chats, button }) {
  // console.log(data.chats[0].chatTopics[0]);
  // console.log(data.chats[0].chatTopics[0].topic);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "flex-start",
        // alignItems: "flex-start",
        // width: "100%",
        // height: "100%",
        marginTop: "1rem ",
        // padding: "1rem ",
        color: "white",
        // backgroundColor: "#333433",
      }}
    >
      <Typography variant="h5">Chats</Typography>
      <div
        style={
          {
            // display: "flex",
            // flexDirection: "column",
            //   justifyContent: "space-between",
            //   alignItems: "center",
            //   justifyContent: "space-between",
            //   textAlign: "left",
            // width: "100%",
            // height: "100%",
            //   margin: "1rem ",
            //   overflow: "scroll",
          }
        }
      >
        {chats?.chats?.map((chat, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              marginTop: "1rem",
              color: "white",
              display: "flex",
              flexDirection: "column",

              // width: "100%",
              backgroundColor: "#333433",
              //   justifyContent: "space-between",
              //   alignItems: "flex-start",
              //   backgroundColor: "#333433",
            }}
          >
            {" "}
            {/* <div
              style={{
                textAlign: "left",
                fontSize: "0.7rem",
              }}
            >
              {chat.chatId}
            </div> */}
            <div
              style={{
                marginTop: "1rem",
                color: "white",
                display: "flex",
                flexDirection: "row",
                width: "100%",
                //   backgroundColor: "pink",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#333433",
                whiteSpace: "nowrap",
              }}
            >
              <Button
                style={{
                  //   position: "relative",
                  //   display: "flex",
                  //   flexDirection: "row",
                  //   width: "100%",
                  //   height: "100%",
                  //   backgroundColor: "pink",
                  color: "white",
                  //   justifyContent: "space-between",
                  //   alignItems: "center",
                  fontSize: "1rem",
                }}
              >
                {/* {chat.chatTopics.map((chatTopic, i) => (
                  <Typography
                    key={i}
                    style={{
                      textAlign: "left",
                    }}
                  >
                    {chatTopic.topic}
                  </Typography>
                ))} */}
              </Button>
              {button}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
