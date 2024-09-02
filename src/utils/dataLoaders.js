export function handleFetch(
  fetchURL,

  errorContext,
  devErrorArray,
  error
) {
  // eslint-disable-next-line no-lone-blocks
  {
    //* USAGE
    /*

 const errorContext = "Error getting channel playlists:";
 const fetchURL = `${baseURL}/playlists?part=snippet&channelId=${youtubeChannelId}&maxResults=${maxResults}&order=${sortOrder}&key=${youtubeConfig.youtubeDataApiKey}`;
 handleFetch(  fetchURL,
 setData,
 errorContext,
 devErrorArray,
 error);
*/
  }
  // console.log(fetchURL, setData, errorContext, devErrorArray, error);
  const data = fetch(fetchURL)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(
        'fetch not working',
        errorContext,
        err,
        devErrorArray,
        error
      );
      devErrorArray.push(err);
      error.push(err);
      throw new Error(errorContext);
      // throw err;
    });
  return data;
}

// export const dataLoader = (dataSetName) => {
//   const files = {};
//   let context;
//   if (dataSetName === 'world-data') {
//     context = require.context('../assets/data/world-data', true, /\.json$/);
//   } else if (dataSetName === 'trump-data') {
//     context = require.context('../assets/data/trump-data', true, /\.json$/);
//   }

//   context.keys().forEach((key) => {
//     const fileName = key
//       .replace('./', '')
//       .replace('.json', '')
//       .replace('/', '_')
//       .replace('-', '_');
//     files[fileName] = context(key);
//   });

//   return files;
// };
