import React, { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
// import { a } from 'react-spring';
// import moment from 'moment';

import AppContext from './AppContext';
// import DataContext from "./DataContext";
import UIContext from './UIContext';
// import UserContext from './UserContext';
// import SearchContext from './SearchContext';

import useGeolocation from '../hooks/useGeoLocation';
// import { getAllDocs } from '../firebase/helperFunctions';
// import { dataLoader } from '../utils/dataLoaders';
// import { convertSingleDate } from '../utils/timeStampFunctions';

// import mockDropFlowText from '../assets/texts/filipkowski.txt';

const InFocusContext = createContext();

export const InFocusProvider = ({ children }) => {
  // const {
  //   dataContext,
  //   dataPack,
  //   setDataContext,
  //   stories,
  //   setStories,
  //   persons,
  //   setPersons,
  //   events,
  //   setEvents,
  //   videos,
  //   setVideos,
  //   selectedStories,
  //   setSelectedStories,
  //   selectedPersons,
  //   setSelectedPersons,
  //   selectedEvents,
  //   setSelectedEvents,
  // } = useContext(DataContext);

  // const { setSearchString } = useContext(SearchContext);
  const { appContext, setAppContext } = useContext(AppContext);
  const { setIntro } = useContext(UIContext);
  const { latitude, longitude } = useGeolocation();
  // const {
  //   userInFocus,
  //   userLocation,
  //   storiesHistory,
  //   setStoriesHistory,
  //   personsHistory,
  //   setPersonsHistory,
  //   eventsHistory,
  //   setEventsHistory,
  //   setVideosHistory,
  // } = useContext(UserContext);
  // const tempDataSet = dataLoader('world-data');
  const [lastInFocusItem, setLastInFocusItem] = useState({});

  // const [dataSetInFocus, setDataSetInFocus] = useState(tempDataSet); // Default behavior
  // console.log("dataSetInFocus", dataSetInFocus);
  const [dataSetKeyInFocus, setDataSetKeyInFocus] = useState('Europe'); // Default behavior
  const [coordsInFocus, setCoordsInFocus] = useState({
    lat: latitude,
    lng: longitude,
  });

  const [countryInFocus, setCountryInFocus] = useState(null);
  const [locationInFocus, setLocationInFocus] = useState(null);

  const dateToday = Math.floor(new Date().getTime() / 1000);
  const [timeRangeInFocus, setTimeRangeInFocus] = useState(null);
  const [startDateInFocus, setStartDateInFocus] = useState(dateToday);
  const [endDateInFocus, setEndDateInFocus] = useState(dateToday);

  const [eventInFocus, setEventInFocus] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);
  // console.log("startDate is", startDateInFocus, endDateInFocus);
  // const [selectedStories, setSelectedStories] = useState([]);
  // const [selectedPersons, setSelectedPersons] = useState([]);
  // const [filteredPersons, setFilteredPersons] = useState(persons);
  const [filteredSyntaxToken, setFilteredSyntaxToken] = useState([]);

  const [selectedLocations, setSelectedLocations] = useState([]);
  const [storyIdInFocus, setStoryIdInFocus] = useState(null);
  const [storyInFocus, setStoryInFocus] = useState(null);
  const [personInFocus, setPersonInFocus] = useState(null);
  const [videoInFocus, setVideoInFocus] = useState(null);
  // console.log("event", eventInFocus);
  const [companyInFocus, setCompanyInFocus] = useState(null);
  const [authorityInFocus, setAuthorityInFocus] = useState(null);
  const [institutionInFocus, setInstitutionInFocus] = useState(null);
  const [departmentInFocus, setDepartmentInFocus] = useState(null);
  const [projectInFocus, setProjectInFocus] = useState(null);
  const [teamInFocus, setTeamInFocus] = useState(null);

  const [soMeAccountInFocus, setSoMeAccountInFocus] = useState(null);
  const [postInFocus, setPostInFocus] = useState(null);
  const [linkInFocus, setLinkInFocus] = useState(
    'https://www.mchenry.edu/news/2022/06/arlene-santos-george.html'
  );
  const [markerInFocus, setMarkerInFocus] = useState(null);

  const [creatorVideos, setCreatorVideos] = useState([]);
  const [ytChannelInFocus, setYtChannelInFocus] = useState(
    JSON.parse(localStorage.getItem('ytChannelInFocus')) || []
  );
  const [ytPlayLists, setYtPlayLists] = useState(
    JSON.parse(localStorage.getItem('tempCalledPlaylists')) || []
  );
  const [ytPlayListInFocus, setYtPlayListInFocus] = useState(
    JSON.parse(localStorage.getItem('ytPlayListInFocus')) || []
  );
  const [ytVideoInFocus, setYtVideoInFocus] = useState(
    JSON.parse(localStorage.getItem('ytVideoInFocus')) || []
  );
  const [articleInFocus, setArticleInFocus] = useState({});
  const [articleInFocusId, setArticleInFocusId] = useState('');
  const [articleSnippetInFocus, setArticleSnippetInFocus] = useState({});
  const [creatorVideoInFocus, setCreatorVideoInFocus] = useState({});

  const [promptInFocus, setPromptInFocus] = useState({});
  const [chatHistory, setChatHistory] = useState({});

  const [scrapedUrlContent, setScrapedUrlContent] = useState('');

  const [reqTextAnalyzis, setReqTextAnalyzis] = useState('');
  const [resAnalyzingSyntax, setResAnalyzingSyntax] = useState();
  const [resExtractEntities, setResExtractEntities] = useState(
    JSON.parse(localStorage.getItem('analyzedText'))
  );
  const [filteredEntities, setFilteredEntities] = useState([]);
  const [entitiesTypes, setEntitiesTypes] = useState([]);
  const [entitiesActiveFilter, setEntitiesActiveFilter] = useState('');
  const [entityInFocus, setEntityInFocus] = useState();
  const [tokenInFocus, setTokenInFocus] = useState();
  const [highlightedStrings, setHighlightedStrings] = useState([]);

  const filterStoriesByPersonInFocus = () => {
    // setSelectedStories([]);
    const tempSelectedStoriesIds = [];
    if (personInFocus) {
      // console.log("selectedStories_", stories, selectedStories);
      // stories?.forEach((story) => {
      //   story?.persons?.forEach((person) => {
      //     if (person?.personId === personInFocus?.basics?.personId) {
      //       tempSelectedStoriesIds.push(story?.storyId);
      //       new Set(tempSelectedStoriesIds);
      //       // console.log("selectedStories_", story);
      //     }
      //   });
      // });
      // const tempSelectedStories = stories?.filter((story) => {
      // return tempSelectedStoriesIds.includes(story?.basics?.storyId);
      // });
      // console.log("selectedStories_", tempSelectedStories);
      // setSelectedStories(tempSelectedStories);
    } else {
      // setSelectedStories([]);
    }
    // console.log("selectedStories_", selectedStories);
  };
  const filterPersonsByStoryInFocus = () => {
    // setSelectedPersons([]);
    const tempSelectedPersonsIds = [];
    if (storyInFocus?.persons?.length > 0) {
      storyInFocus?.persons?.forEach((element) => {
        tempSelectedPersonsIds.push(element?.personId);
      });
      // const tempSelectedPersons = persons?.filter((person) =>
      //   tempSelectedPersonsIds.includes(person?.basics?.personId)
      // );
      // console.log(
      //   "storyInFocus_",
      //   persons,
      //   storyInFocus?.persons,
      //   storyInFocus?.events,
      //   tempSelectedPersons,
      // );
      // setSelectedPersons(tempSelectedPersons);
    } else {
      // setSelectedPersons([]);
    }
  };
  const filterEventsByPersonInFocus = () => {
    // setFilteredEvents([]);
    // setSelectedEvents(storyIdInFocus?.events);
    const tempPersonInFocusId = personInFocus?.basics?.personId;
    const tempFilteredEventsByPerson = [];
    const tempSelectedPersonsIds = [];
    const tempFilteredPersonsInvolved = [];
    const tempFilteredPersonsInvolvedId = [];
    // if (selectedEvents?.length > 0) {
    //   // console.log("filteredEventsByPerson_eachEvent", selectedEvents);
    //   selectedEvents?.forEach((element) => {
    //     if (element?.persons?.length > 0) {
    //       element?.persons?.forEach((personInVolved) => {
    //         if (personInVolved?.personId === tempPersonInFocusId) {
    //           // console.log("filteredEventsByPerson_eachEvent", element);
    //           tempFilteredEventsByPerson.push(element);
    //         }
    //       });
    //     }
    //   });
    //   // console.log("filteredEventsByPerson_", tempFilteredEventsByPerson);

    //   setFilteredEvents(
    //     tempFilteredEventsByPerson?.sort((a, b) => {
    //       const dateA = new Date(a.basics?.date?.start);
    //       const dateB = new Date(b.basics?.date?.start);
    //       return dateB - dateA;
    //     })
    //   );
    // } else {
    //   setFilteredEvents([]);
    // }
  };
  const buildPersonArray = (eventsArray, setArray) => {
    // console.log("eventsArray", eventsArray);
    eventsArray?.forEach((groupInvolved, i) => {
      // const filtered = persons?.filter((person) => {
      //   return groupInvolved?.persons?.some(
      //     (item) => item.personId === person?.basics?.personId
      //   );
      // });
      // console.log("selectedPersons", filtered);
      // setArray(filtered);
      // setPersonInFocus(filtered[0]);
    });
  };
  const buildEventsWithAvatars = (eventsArray, setArray) => {
    // console.log("eventsArray", eventsArray);
    const pushedPersonsOntoStoryEvents = eventsArray;
    eventsArray?.forEach((groupInvolved, i) => {
      groupInvolved?.persons?.forEach((person, i) => {
        // console.log("eventsArray", person);
      });
    });
    setArray(
      pushedPersonsOntoStoryEvents?.sort((a, b) => {
        const dateA = new Date(a.basics?.date?.start);
        const dateB = new Date(b.basics?.date?.start);
        return dateB - dateA;
      })
    );
  };
  useEffect(() => {
    setTimeout(() => {
      setCoordsInFocus({ lat: latitude, lng: longitude });
    }, 1000);

    return () => {};
  }, [latitude, longitude]);
  useEffect(() => {
    //  if (appContext !== "home") {
    setFilteredEvents([]);
    // buildEventsWithAvatars(storyInFocus?.events, setSelectedEvents);
    //  }

    // setStartDateInFocus(convertSingleDate(storyInFocus?.basics?.date?.start));
    // setEndDateInFocus(convertSingleDate(storyInFocus?.basics?.date?.end));
    // setCoordsInFocus(storyInFocus?.basics?.coords);
    // console.log("coordsInFocus", storyInFocus?.basics?.coords, coordsInFocus);
    setLastInFocusItem({ context: 'story', item: storyInFocus });
    filterPersonsByStoryInFocus();

    return () => {};
  }, [storyInFocus]);
  useEffect(() => {
    if (appContext !== 'home') {
      // buildPersonArray(markerInFocus?.events, setSelectedPersons);
    }

    // console.log("eventInFocus", eventInFocus?.basics?.date?.start);
    return () => {};
  }, [filteredEvents]);
  useEffect(() => {
    setLastInFocusItem({ context: 'event', item: eventInFocus });
    // setStartDateInFocus(convertSingleDate(eventInFocus?.basics?.date?.start));
    // setEndDateInFocus(convertSingleDate(eventInFocus?.basics?.date?.end));
    setCoordsInFocus(eventInFocus?.basics?.coords);
    // buildPersonArray([eventInFocus], setSelectedPersons);

    if (eventInFocus?.basics?.eventWikipediaId) {
      // setDataContext('wikipedia');
      setArticleInFocusId(eventInFocus?.basics?.eventWikipediaId);
    } else {
      // setDataContext('events');
    }
    return () => {};
  }, [eventInFocus]);
  // useEffect(() => {
  // if (selectedPersons?.length > 0) {
  //   setCoordsInFocus(selectedPersons[0]?.basics?.coords);
  //   setStartDateInFocus(
  //     convertSingleDate(selectedPersons[0]?.basics?.date?.start)
  //   );
  //   setEndDateInFocus(
  //     convertSingleDate(selectedPersons[0]?.basics?.date?.end)
  //   );
  //   setLastInFocusItem({ context: 'person', item: selectedPersons }[0]);
  // }
  // console.log("selectedPersons", selectedPersons);
  // setSearchString(personInFocus?.basics?.personName);
  // return () => {};
  // }, [selectedPersons]);
  useEffect(() => {
    // console.log(
    //   "selectedEvents",
    //   personInFocus?.basics?.personId,
    //   filteredEvents,
    //   selectedEvents,
    // );

    filterStoriesByPersonInFocus();
    // setFilteredEvents([]);
    filterEventsByPersonInFocus();
    setCoordsInFocus(personInFocus?.basics?.coords);
    setLastInFocusItem({ context: 'person', item: personInFocus });
    return () => {};
  }, [personInFocus]);
  useEffect(() => {
    if (videoInFocus?.basics?.storyId) {
      // console.log("tempStory", videoInFocus?.basics?.storyId);
      // const tempStories = stories?.filter((item) => {
      //   if (item?.basics?.storyId === videoInFocus?.basics?.storyId) {
      //     return item;
      //   }
      // });

      const key = '?.basics?.storyId';
      // Create a Set to store unique stories
      // const uniqueStories = [
      //   ...new Map(tempStories.map((item) => [item[key], item])).values(),
      // ];

      setMarkerInFocus([]);
      // setStoryInFocus(uniqueStories[0]);
    }
    setLastInFocusItem({ context: 'video', item: videoInFocus });

    return () => {};
  }, [videoInFocus]);
  useEffect(() => {
    // console.log("markerInFocus", markerInFocus?.events[0]);
    // console.log("filteredEvents", markerInFocus);
    // console.log("markerInFocus", markerInFocus);
    // setSelectedPersons([]);
    setEventInFocus(markerInFocus?.events ? markerInFocus?.events[0] : null);
    // setLastInFocusItem({ context: "marker", item: markerInFocus });
    return () => {};
  }, [markerInFocus]);
  // useEffect(() => {
  //   // setIntro(true);

  //   // setTimeout(() => {
  //   //   setIntro(false);
  //   // }, 200);
  //   if (Array.isArray(dataPack?.data)) {
  //     // console.log("brushedTime", dataPack.brushedTime);
  //     const storiesMap = new Map();
  //     const personsMap = new Map();
  //     const eventsMap = new Map();

  //     dataPack.data.forEach((item) => {
  //       if (item.context === 'stories') {
  //         if (!storiesMap.has(item.id)) {
  //           storiesMap.set(item.id, []);
  //         }
  //         storiesMap
  //           .get(item.id)
  //           .push(
  //             ...stories.filter((story) => story?.basics?.storyId === item.id)
  //           );
  //         setSelectedStories([...storiesMap.values()].flat());

  //         // setCoordsInFocus(storyInFocus?.coords);
  //       } else if (item.context === 'persons' || dataContext === 'persons') {
  //         if (!personsMap.has(item.id)) {
  //           personsMap.set(item.id, []);
  //         }

  //         personsMap
  //           .get(item.id)
  //           .push(
  //             ...persons?.filter(
  //               (person) => person?.basics?.personId === item.id
  //             )
  //           );

  //         // setSelectedPersons([...uniquePersons.values()].flat());
  //         setSelectedPersons([...personsMap.values()].flat());
  //         // console.log("triggered", selectedPersons);
  //       } else if (item.context === 'events') {
  //         setFilteredEvents([]);
  //         if (!eventsMap.has(item.date)) {
  //           eventsMap.set(item.date, []);
  //         }

  //         // console.log(
  //         //   "filteredEvents dataPack:",
  //         //   dataPack?.brushedTime?.start.getTime(),
  //         //   events,
  //         //   events[2]?.basics?.date?.start,
  //         //   new Date(events[2]?.basics?.date?.start),
  //         // );
  //         eventsMap?.get(item.date).push(
  //           ...selectedEvents?.filter((event) => {
  //             return (
  //               new Date(event?.basics?.date?.start).getTime() >=
  //                 new Date(dataPack?.brushedTime?.start).getTime() &&
  //               new Date(event?.basics?.date?.end).getTime() <=
  //                 new Date(dataPack?.brushedTime?.end).getTime()
  //             );
  //           })
  //         );

  //         // Create a new Set to store unique events
  //         const newSet = new Set();
  //         eventsMap.forEach((eventList, key) => {
  //           // console.log("filteredEvents Key:", key);
  //           // console.log("filteredEvents eventList:", eventList);
  //           eventList.forEach((event) => {
  //             // console.log("filteredEvents event:", event);
  //             newSet.add(event);
  //           });
  //         });

  //         // console.log("filteredEvents:", eventsMap);
  //         setFilteredEvents(Array.from(newSet));
  //       }
  //     });
  //   } else {
  //   }
  //   setLastInFocusItem({ context: 'story', item: storyInFocus });
  // }, [dataPack]);
  useEffect(() => {
    // if (
    //   typeof startDateInFocus === "number" ||
    //   typeof endDateInFocus === "number"
    // ) {
    //   console.log(
    //     "startDate isNumber",
    //     dateToday,
    //     startDateInFocus,
    //     endDateInFocus,
    //   );
    //   return;
    // } else if (
    //   typeof startDateInFocus === "string"
    //   //  &&      startDateInFocus?.getTime()
    // ) {
    //   // const unixTimestamp = Math.floor(startDateInFocus?.getTime() / 1000);
    //   console.log("startDate isString", dateToday, startDateInFocus);
    //   // setStartDateInFocus(unixTimestamp);
    // } else {
    //   setStartDateInFocus(dateToday);
    //   console.log("startDate isUnreadable", dateToday, typeof startDateInFocus);
    // }
    // setStartDateInFocus(convertSingleDate(startDateInFocus));
    // console.log("startDate isNumber", convertSingleDate(startDateInFocus));
    return () => {};
  }, [
    startDateInFocus,
    // setStartDateInFocus,
    // endDateInFocus,
    // setEndDateInFocus,
  ]);

  // const getMockData = async () => {
  //   await fetch(mockDropFlowText)
  //     .then((r) => r.text())
  //     .then((text) => {
  //       const displayText = text.replace(/~~/g, '<br/>');
  //       setReqTextAnalyzis(displayText);
  //       console.log('reqTextAnalyzis', reqTextAnalyzis);
  //     });
  // };
  useEffect(() => {
    // getMockData();
    return () => {};
  }, []);

  // const useSetHistory = (inFocus, setHistory, context) => {
  //   // console.log("historyType", inFocus, context);
  //   useEffect(() => {
  //     const tempArray = [];
  //     tempArray?.unshift(inFocus);
  //     // arrayToPushOnTo(...tempArray);
  //     // console.log("tempArray", tempArray?.length);
  //     // console.log("tempArray", arrayToPushOnTo, tempArray);
  //     setHistory(tempArray);

  //     if (context === "stories") handleSetStory();
  //     // if (context === "events") handleSetStory();
  //     return () => {};
  //   }, [inFocus, setHistory]);
  // };
  // useSetHistory(storyInFocus, setStoriesHistory, "stories");
  // useSetHistory(personInFocus, setPersonsHistory, "");
  // useSetHistory(eventInFocus, setEventsHistory, "events");
  // useSetHistory(videoInFocus, setVideosHistory, "");

  return (
    <InFocusContext.Provider
      value={{
        lastInFocusItem,
        setLastInFocusItem,
        // dataSetInFocus,
        // setDataSetInFocus,
        dataSetKeyInFocus,
        setDataSetKeyInFocus,
        coordsInFocus,
        setCoordsInFocus,
        countryInFocus,
        setCountryInFocus,
        locationInFocus,
        setLocationInFocus,

        timeRangeInFocus,
        setTimeRangeInFocus,
        startDateInFocus,
        setStartDateInFocus,
        endDateInFocus,
        setEndDateInFocus,

        // selectedStories,
        // setSelectedStories,
        // selectedPersons,
        // setSelectedPersons,
        // filteredPersons,
        // setFilteredPersons,

        // selectedEvents,
        // setSelectedEvents,
        filteredEvents,
        setFilteredEvents,
        selectedLocations,
        setSelectedLocations,

        storyIdInFocus,
        setStoryIdInFocus,
        storyInFocus,
        setStoryInFocus,
        personInFocus,
        setPersonInFocus,
        eventInFocus,
        setEventInFocus,
        videoInFocus,
        setVideoInFocus,

        projectInFocus,
        setProjectInFocus,
        teamInFocus,
        setTeamInFocus,

        companyInFocus,
        setCompanyInFocus,
        authorityInFocus,
        setAuthorityInFocus,
        institutionInFocus,
        setInstitutionInFocus,
        departmentInFocus,
        setDepartmentInFocus,

        soMeAccountInFocus,
        setSoMeAccountInFocus,
        postInFocus,
        setPostInFocus,
        linkInFocus,
        setLinkInFocus,

        ytChannelInFocus,
        setYtChannelInFocus,
        ytPlayListInFocus,
        setYtPlayListInFocus,
        ytVideoInFocus,
        setYtVideoInFocus,

        articleInFocus,
        setArticleInFocus,
        articleInFocusId,
        setArticleInFocusId,
        articleSnippetInFocus,
        setArticleSnippetInFocus,

        creatorVideoInFocus,
        setCreatorVideoInFocus,

        promptInFocus,
        setPromptInFocus,

        chatHistory,
        setChatHistory,

        scrapedUrlContent,
        setScrapedUrlContent,

        reqTextAnalyzis,
        setReqTextAnalyzis,
        resExtractEntities,
        setResExtractEntities,
        resAnalyzingSyntax,
        setResAnalyzingSyntax,
        entitiesTypes,
        setEntitiesTypes,
        entitiesActiveFilter,
        setEntitiesActiveFilter,
        filteredEntities,
        setFilteredEntities,
        filteredSyntaxToken,
        setFilteredSyntaxToken,
        entityInFocus,
        setEntityInFocus,
        tokenInFocus,
        setTokenInFocus,
        highlightedStrings,
        setHighlightedStrings,

        markerInFocus,
        setMarkerInFocus,
      }}
    >
      {children}
    </InFocusContext.Provider>
  );
};
export default InFocusContext;
export const InFocusState = () => {
  return useContext(InFocusContext);
};
