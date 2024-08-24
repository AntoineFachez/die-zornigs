import { useState, useEffect } from "react";

const useObjectSearch = (jSONItemInFocus, keysToSearch) => {
  const [matchedObjects, setMatchedObjects] = useState([]);
  const [matchedKeys, setMatchedKeys] = useState([]);
  useEffect(() => {
    const searchObjects = (dataArr, searchKeys, resultsArr, collectKeys) => {
      // console.log("searchObjects", dataArr, searchKeys);
      // console.log("searchObjects", dataArr, searchKeys);
      // console.log("searchObjects", jSONItemInFocus);
      dataArr?.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
          let itemKey = key;
          if (searchKeys?.includes(key)) {
            // console.log(
            //   "searchObjects",
            //   jSONItemInFocus ? "json in focus" : "json NOT focus"
            // );
            resultsArr.push({ key: key, value: obj[key], itemRooData: obj });
            collectKeys.push({ obj: obj, key: itemKey });
            // console.log("searchObjects", resultsArr, collectKeys);
          }
          if (typeof obj[key] === "object") {
            searchObjects([obj[key]], searchKeys, resultsArr, collectKeys);
          }
        });
      });
    };

    const results = [];
    const validKeys = [];

    if (jSONItemInFocus) {
      searchObjects([jSONItemInFocus], keysToSearch, results, validKeys);
      var unique = results.filter(
        (value, index, array) => array.indexOf(value) === index,
      );
      let tempArr = unique;

      setMatchedObjects({
        // rootOfArrayInFocus: rootOfArrayInFocus,
        results: results,
        validKeys,
      });
      // setMatchedKeys({ validKeys: validKeys });
    } else {
      return;
    }
  }, [jSONItemInFocus]);
  // console.log("searchObjects", matchedObjects);

  return matchedObjects;
};

export default useObjectSearch;
