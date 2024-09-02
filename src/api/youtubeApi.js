import { handleFetch } from "../utils/dataLoaders";

const baseURL = "https://youtube.googleapis.com/youtube/v3";

export function loadClient(apiKey) {
  return new Promise((resolve, reject) => {
    window.gapi.client
      .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(
        function () {
          window.gapi.client.setApiKey(apiKey); // Set the API key after loading the client
          resolve();
        },
        function (err) {
          console.error("Error loading GAPI client for API", err);
          reject(err);
        },
      );
  });
}

// Make sure the client is loaded and sign-in is complete before calling this method.
// Execute a YouTube API request
export function execute(videoId, functionToExecute) {
  return window.gapi.client.youtube.captions
    .list({
      part: ["snippet"],
      videoId: videoId,
    })
    .then((response) => {
      //    console.log("Response", response.result);
      functionToExecute();
    })
    .catch((err) => {
      console.error("Execute error", err);
      throw err;
    });
}

// Fetch channel playlists
export const getChannelPlayLists = (
  youtubeConfig,
  setData,
  devErrorArray,
  error,
  youtubeChannelId,
  maxResults,
  part,
  sortOrder,
) => {
  const errorContext = "Error getting channel playlists:";
  const fetchURL = `${baseURL}/playlists?part=snippet&channelId=${youtubeChannelId}&maxResults=${maxResults}&order=${sortOrder}&key=${youtubeConfig.youtubeDataApiKey}`;
  handleFetch(fetchURL, setData, errorContext, devErrorArray, error);
};

// Fetch playlist items
export const getChannelItemslatestUpLoad = (
  youtubeConfig,
  setData,
  playListId,
  maxResults,
  part,
  sortOrder,
) => {
  const playlistItems = `${baseURL}/playlistItems?part=snippet&type=video&order=${sortOrder}&contentDetails&maxResults=${maxResults}&playlistId=${playListId}&key=${youtubeConfig.youtubeDataApiKey}`;
  // const playlistItems = `${baseURL}/playlistItems?part=snippet&playlistId=${playListId}&key=${youtubeConfig.youtubeDataApiKey}`;
  fetch(playlistItems)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      // console.log(data);
      localStorage.setItem("tempCalledPlayListItems", JSON.stringify(data));
    })
    .catch((error) => {
      console.error("Error fetching playlist items:", error);
      throw error;
    });
};

export const getVideoInFocusDetails = (
  youtubeConfig,
  setYtVideoInFocusData,
) => {
  const videoId = "videoId called in api/youtube.js";
  const videoItem = `${baseURL}/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${youtubeConfig.youtubeDataApiKey}`;

  fetch(videoItem)
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      setYtVideoInFocusData(data);

      localStorage.setItem("tempCalledVideos", JSON.stringify(data));
    });
};

// Fetch caption Id of video
export const getCaptionDownload = (youtubeConfig) => {
  {
    /*https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.captions.list?
part=snippet
&videoId=PRU2ShMzQRg

https://www.googleapis.com/youtube/v3/captions/AUieDaYbrQ_ILMbMyr5Pzx2BArYR2NDTvig3wkDljt-ivOHaLlY
*/
  }
  const captionURL = `${baseURL}/captions/AUieDaYbrQ_ILMbMyr5Pzx2BArYR2NDTvig3wkDljt-ivOHaLlY?key=${youtubeConfig.youtubeDataApiKey}`;
  fetch(captionURL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching caption data:", error);
      throw error;
    });
};

// Fetch caption itself
//TODO: GET CAPTION const captionURL = `${baseURL}/captions/${captionData.id}/download`;

// export const fetchMetricData = (youtubeConfig) => {
//   const projectId = "projects/questionthem-90ccf";
//   // URL for retrieving metric descriptors
//   const metricDescriptorsURL = `https://monitoring.googleapis.com/v3/${projectId}/metricDescriptors`;

//   // Load the service account key JSON file
//   const serviceAccountKey = require("../keys/client_secret_575809602490-4q6g2lqm5jl4tujhrj4mqpj21mmulqqd.apps.googleusercontent.com.json");

//   // Set up authentication
//   const auth = new google.auth.GoogleAuth({
//     keyFile: serviceAccountKey,
//     scopes: ["https://www.googleapis.com/auth/cloud-platform"],
//   });

//   // Create a Google Cloud Monitoring client
//   const monitoring = google.monitoring("v3");

//   // Construct request parameters
//   const requestParams = {
//     // ...your request parameters here...
//   };

//   // Use the auth object to authenticate the API request
//   auth
//     .getClient()
//     .then((client) => {
//       // Make the API request using the authenticated client
//       monitoring.projects.metricDescriptors
//         .list(requestParams, { auth: client })
//         .then((response) => {
//       //    console.log("Response:", response.data);
//         })
//         .catch((err) => {
//           console.error("Error:", err);
//         });
//     })
//     .catch((error) => {
//       console.error("Authentication Error:", error);
//     });
// };
