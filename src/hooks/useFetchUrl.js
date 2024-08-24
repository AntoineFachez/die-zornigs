import { useState, useEffect, useRef } from "react";

const useFetchUrl = (urlToFetchFrom, callbackName) => {
  const [pageContent, setPageContent] = useState();
  const [error, setError] = useState(null);
  const scriptRef = useRef();
  useEffect(() => {
    if (urlToFetchFrom) {
      async function fetchPageContent(url, callbackName) {
        // Encode the callback name for safe inclusion in the URL
        const encodedCallbackName = encodeURIComponent(callbackName);

        // Construct the JSONP URL with callback and target URL
        const jsonpUrl = `https://europe-west1-anue-8e4c9.cloudfunctions.net/fetchPage?callback=${encodedCallbackName}&url=${url}`;

        try {
          // Create a script element to trigger JSONP request
          const script = document.createElement("script");
          script.src = await jsonpUrl;
          // Attach error handling
          script.onerror = () => {
            console.error(`Error fetching content from: ${url}`);
          };

          // Append the script element to the document to initiate the request
          script.src = pageContent?.src;
          scriptRef?.current?.appendChild(script);
          setPageContent(script);
          // Remove the script element after a timeout to avoid memory leaks
          setTimeout(() => {
            scriptRef?.current?.removeChild(script);
          }, 5000);
        } catch (error) {
          console.error("Error fetching content:", error);
          setPageContent({ error: "An error occurred." });
        }
      }

      fetchPageContent(urlToFetchFrom, callbackName);
    } else {
      setPageContent({ error: "No URL provided." });
    }
  }, [urlToFetchFrom]);
  const htmlScriptTag = <div ref={scriptRef} />;
  return { pageContent, callbackName, error, htmlScriptTag };
};
export default useFetchUrl;
