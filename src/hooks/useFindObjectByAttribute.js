import { useState, useEffect } from "react";

const useFindObjectByAttribute = (results, validKeys, itemToSearch) => {
  const [nestedObject, setNestedObject] = useState([null]);

  useEffect(() => {
    if (
      !results ||
      results.length === 0 ||
      !validKeys ||
      validKeys?.length === 0
    ) {
      return;
    }

    const findNestedObject = (results, validKeys) => {
      for (let i = 0; i < validKeys.length; i++) {
        // console.log("searchObjects validKeys", validKeys);
        const attribute = validKeys[i];
        // const value = attribute.value;
        // console.log("searchObjects attribute.key", value);

        for (let i = 0; i < results.length; i++) {
          // console.log("searchObjects findNestedObject", results, validKeys[i]);
          const obj = results[i]?.obj;
          // console.log("searchObjects attribute.key", obj);
          const value = attribute?.value;

          const key = attribute?.key;
          // console.log("searchObjects attribute.key", key);

          // console.log("searchObjects attribute.value", value);
          if (obj[key] === value) {
            if (results?.length === 1) {
              // console.log("searchObjects", itemToSearch);
              // console.log("searchObjects attribute.value", obj[key]);
              nestedObject.push({
                key: obj[key],
                obj: obj,
                searchTerm: itemToSearch,
              });
              validKeys.shift();
              // console.log("searchObjects obj[key]", obj);
              //    console.log("searchObjects nestedObject", nestedObject);

              return;
            } else if (validKeys?.length > 1) {
              nestedObject?.push({
                key: obj[key],
                obj: obj,
                searchTerm: itemToSearch,
              });
              validKeys.shift();
              //    console.log("searchObjects attribute", value);
              //    console.log("searchObjects obj", obj);
              //    console.log("searchObjects obj[key]", obj[key]);
            } else {
              // console.log("searchObjects obj[key]", validKeys);
              // setNestedObject({
              //   key: obj[key],
              //   obj: obj,
              //   searchTerm: itemToSearch,
              // });
              return findNestedObject(obj, validKeys);
            }
          } else if (Array.isArray(obj[key])) {
            return findNestedObject(obj[key], validKeys);
            // } else {
            //   array?.shift();
            //   setNestedObject({
            //     key: obj[key],
            //     obj: obj,
            //     searchTerm: itemToSearch,
            //   });
          }
        }
      }
    };

    findNestedObject(results, validKeys);

    //    console.log("searchObjects nestedObject", nestedObject);
    return () => {
      setNestedObject(null);
    };
  }, [results, validKeys]);

  return nestedObject;
};
export default useFindObjectByAttribute;
