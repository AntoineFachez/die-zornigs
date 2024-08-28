import React, { useContext, useState } from "react";
import { Box, Button, IconButton, TextField } from "@mui/material";
import {
  ArrowBackIos,
  FilterList,
  GridView,
  OndemandVideo,
  SearchOutlined,
  Summarize,
  TableChart,
  ViewSidebar,
  Widgets,
} from "@mui/icons-material";

import chatGPTIcon from "../../assets/icons/ChatGPT_logo.svg.png";
import googleBardIcon from "../../assets/icons/Google_Bard_logo.png";
import UIContext from "../../context/UIContext";
import Menu from "../../components/menu/Index";

export default function MenuChats({
  appContext,
  setAppContext,
  setWidgetActive,
  setArticleInFocus,
  setShowArticleInFocusInfoBox,
  handleSelectWidgetContext,
  searchString,
  selectedWidgetContext,
  showSearchVideo,
  setShowSearchVideo,
  handleSearch,
  handleFilterEntities,
  loading,
  getAllentitiesTypes,
  handlePaste,
  handleSubmit,
  styledComponent,
}) {
  const { showChatsMenu, setShowChatsMenu, toggleDrawer } =
    useContext(UIContext);
  const menuProps = {
    functions: {
      handleShowMenu: setShowChatsMenu,
    },
    states: { showMenu: showChatsMenu },
  };
  // console.log("selectedWidgetContext", selectedWidgetContext);
  const buttonArray = [
    <>
      {/* <IconButton
        sx={
          selectedWidgetContext === "flexList"
            ? styledComponent?.widgetMenuButton?.active
            : styledComponent?.widgetMenuButton?.inactive
        }
        // sx={{ backgroundColor: "white" }}
        onClick={() => handleSelectWidgetContext("flexList")}
      >
        <GridView />
      </IconButton> */}
      {/* <IconButton
        sx={
          selectedWidgetContext === "table"
            ? styledComponent?.widgetMenuButton?.active
            : styledComponent?.widgetMenuButton?.inactive
        }
        // sx={{ backgroundColor: "white" }}
        onClick={() => handleSelectWidgetContext("table")}
      >
        <FilterList />
      </IconButton> */}
    </>,
    <IconButton
      sx={
        selectedWidgetContext === "chatGPT"
          ? styledComponent?.widgetMenuButton?.active
          : styledComponent?.widgetMenuButton?.inactive
      }
      // sx={{ backgroundColor: "white" }}
      onClick={() => {
        // handleSelectWidgetContext("chatGPT");
        return handleSelectWidgetContext("chatGPT");
      }}
    >
      <img
        src={chatGPTIcon}
        alt="some text"
        style={styledComponent?.widgetMenuButtonCustom?.img}
      />
    </IconButton>,
    <IconButton
      sx={
        selectedWidgetContext === "gemini"
          ? styledComponent?.widgetMenuButton?.active
          : styledComponent?.widgetMenuButton?.inactive
      }
      // sx={{ backgroundColor: "white" }}
      onClick={() => handleSelectWidgetContext("gemini")}
    >
      <img
        src={googleBardIcon}
        alt="some text"
        style={styledComponent?.widgetMenuButtonCustom?.img}
      />
    </IconButton>,

    selectedWidgetContext === "gemini" && (
      <>
        {" "}
        <Button
          sx={styledComponent?.menuButtonText?.active}
          onClick={handleFilterEntities}
          disabled={loading}
        >
          filter
        </Button>
        ,
        <Button
          sx={styledComponent?.menuButtonText?.active}
          onClick={getAllentitiesTypes}
          disabled={loading}
        >
          getAllentitiesTypes
        </Button>
        ,
      </>
    ),

    // <IconButton
    //   sx={
    //     selectedWidgetContext === "selector"
    //       ? styledComponent?.widgetMenuButton?.active
    //       : styledComponent?.widgetMenuButton?.inactive
    //   }
    //   // sx={{ backgroundColor: "white" }}
    //   onClick={() => handleSelectWidgetContext("selector")}
    // >
    //
    //   <Widgets />
    // </IconButton>,
    // <IconButton
    //   onClick={() => handleSelectWidgetContext("drawer")}
    //   // onClick={toggleDrawer("left", true)}
    //   sx={
    //     selectedWidgetContext === "drawer"
    //       ? styledComponent?.widgetMenuButton?.active
    //       : styledComponent?.widgetMenuButton?.inactive
    //   }
    // >
    //   <ViewSidebar />
    // </IconButton>,
  ];
  const fieldsArray = [
    <>
      <TextField
        sx={styledComponent?.customTextArea}
        onPaste={handlePaste}
        // value={reqTextAnalyzis}
      />{" "}
      <Button
        sx={styledComponent?.menuButtonText?.active}
        onClick={handleSubmit}
        disabled={loading}
      >
        Analyze
      </Button>
    </>,
  ];
  // const fieldsArray = [
  //   <>
  //     <TextField
  //       id="outlined-controlled"
  //       label="Controlled"
  //       size="small"
  //       value={searchString}
  //       onChange={(event) => {
  //         // setSearchString(event.target.value);
  //       }}
  //       sx={styledComponent?.textField}
  //     />
  //     <IconButton onClick={handleSearch} sx={styledComponent?.iconButton}>
  //       <SearchOutlined />
  //     </IconButton>
  //   </>,
  // ];
  return (
    <>
      <Menu
        menuProps={menuProps}
        verticalArray={buttonArray}
        horizontalArray={fieldsArray}
        contextSelector={
          <>
            {/* <ContextSelector
              appContext={appContext}
              setAppContext={setAppContext}
              selectedContext={selectedContext}
              storyContext={storyContext}
              setStoryContext={setStoryContext}
              selectorItems={selectorMenuItems}
              handleSelect={handleChangeStoryContext}
            styledComponent={styledComponent}
            /> */}
          </>
        }
        // autoCompleteData={autoCompleteData}
        // keys={keys}
        // imageUrl={imageUrl}
        // query={query}
        // setQuery={setQuery}
        // setAnswer={setAnswer}
        // textfieldLabel={textfieldLabel}
        styledComponent={styledComponent}
      />
    </>
  );
}
