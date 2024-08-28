import { Button, IconButton, Typography } from "@mui/material";
import React from "react";

import AddIcon from "@mui/icons-material/Add";

export default function NewChat() {
  return (
    <Button
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        border: "solid 1px grey",
        borderRadius: "6px",
        padding: "0.5rem",
        color: "white",
        backgroundColor: "#343541",
      }}
    >
      <AddIcon style={{ marginRight: "1rem" }} />
      <Typography>NewChat</Typography>
    </Button>
  );
}
