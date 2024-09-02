import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
// import InFocusContext from './InFocusContext';
import { submitToFirestore } from '../firebase/helperFunctions';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchContext, setSearchContext] = useState('library');
  const [showHistorySearch, setShowHistorySearch] = useState(false);

  const [searchString, setSearchString] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [activeSearchTerm, setActiveSearchTerm] = useState('yoga at home');
  const [rawData, setRawData] = useState([]);
  //* x, Twitter
  const [uniqTweets, setUniqTweets] = useState([]);
  //* Youtube

  const [tempCalledVideos, setTempCalledVideos] = useState(
    JSON.parse(localStorage.getItem('tempCalledVideos')) || []
  );
  //* Database User videos
  const [backendStoredPlayLists, setBackendStoredPlayLists] = useState([
    { backendVideoId: 1, title: 'sometitle 1' },
    { backendVideoId: 2, title: 'sometitle 2' },
    { backendVideoId: 3, title: 'sometitle 3' },
  ]);

  const [queryLocation, setQueryLocation] = useState([]);
  const [answerLocation, setAnswerLocation] = useState({});

  const [scriptInFocus, setScriptInFocus] = useState({});
  const [subScriptInFocus, setSubScriptInFocus] = useState({});

  return (
    <SearchContext.Provider
      value={{
        showHistorySearch,
        setShowHistorySearch,
        searchString,
        setSearchString,
        searchHistory,
        setSearchHistory,
        activeSearchTerm,
        setActiveSearchTerm,
        rawData,
        setRawData,

        tempCalledVideos,
        setTempCalledVideos,

        uniqTweets,
        setUniqTweets,

        backendStoredPlayLists,
        setBackendStoredPlayLists,

        // storiesHistory,
        // setStoriesHistory,

        queryLocation,
        setQueryLocation,
        answerLocation,
        setAnswerLocation,

        // scripts,
        // setScripts,
        // scriptInFocus,
        // setScriptInFocus,
        // subScriptInFocus,
        // setSubScriptInFocus,

        searchContext,
        setSearchContext,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContext;
export const SearchState = () => {
  return useContext(SearchContext);
};
