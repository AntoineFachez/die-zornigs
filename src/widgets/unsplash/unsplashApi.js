import { handleFetch } from '../../utils/dataLoaders';
import { unsplashConfig } from '../../api/apiConfig';

export function getImagesByQuery(activeSearchTerm, devErrorArray, error) {
  const fetchURL = `${unsplashConfig.baseURL}/search/photos?query=${activeSearchTerm}&client_id=${unsplashConfig.UNSPLASH_KEY}`;
  const errorContext = 'unable to fetch Unsplash Images';
  const data = handleFetch(fetchURL, errorContext, devErrorArray, error);
  return data;
}
