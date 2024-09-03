// eslint-disable-next-line no-lone-blocks
{
  //** PROPS Explained */
  /*
Break down the props used in the given link to the Wikipedia API:
The most commonly used combination is action=query and format=json, which allows you to retrieve structured 
data in JSON format from the MediaWiki database.
    
For the action parameter in the Wikipedia API, the main options are:
    action=query: Specifies that you're making a query to the Wikipedia API.        
    query: Retrieve information from the MediaWiki database.
    parse: Parse wikitext content, allowing you to retrieve HTML or other representations of a page's content.
    expandtemplates: Expand templates in wikitext content.
    help: Get help documentation about the API.
    paraminfo: Retrieve information about API parameters.
    
For the format parameter, the options specify the format of the response:
    format=json: Requests the response in JSON format.
    json: Returns the response in JSON format.
    xml: Returns the response in XML format.
    php: Returns the response as serialized PHP.
    wddx: Returns the response in WDDX format.
    yaml: Returns the response in YAML format.
    
    prop=extracts: Specifies that you want to retrieve content extracts from the article.
       links, extracts, pageimages, revisions, categories, etc
    pageids=${pageid}: Specifies the page ID of the article for which you want to retrieve content.
    exintro=1: Requests only the introduction (lead) section of the article.
    explaintext=1: Requests plain text content instead of HTML markup.
    callback=jsonpCallback: Specifies that you want to use JSONP callback for the response.
    origin=*: Sets the CORS origin to allow cross-origin requests.
  
  Other:
    titles: Allows you to specify the TITLES of the pages you want to retrieve instead of using pageids.
    sections: Allows you to retrieve SECTIONS of a page's content.
    clshow: Controls which CATEGORIES to show when using categories in prop.
    redirects: Specifies whether to follow REDIRECTS or not.
    rvprop: Specifies which properties to include in REVISION data (when using revisions in prop).
    plnamespace: Limits the results to a specific namespace when using LINKS in prop.
    
In summary, this API request fetches the introduction section of a Wikipedia article by providing its 
page ID and requests the content in plain text format using JSONP for cross-origin requests. 
The response will be processed by the specified JSONP callback function (jsonpCallback), and the CORS 
origin is set to allow the request from any origin (*).

*/
}

const props = {
  baseUrl: "https://en.wikipedia.org/w/api.php?",
  action: "action=query",
  format: `&format=${"json"}`,
  // props: "&prop=pageimages",
  // props: "&prop=extracts",
  props: "&prop=pageimages|extracts|links|revisions", //* |revisions
  rvprops: "&rvprop=content",
  sections: "&sections=1",
  rvsections: "&rvsections=0",
  exintro: "&exintro=1",
  explaintext: "",
  exlimit: "&exlimit=2",
  pithumbsize: "&pithumbsize=400",
  pilimit: "&pilimit=4",
  callback: "&callback=jsonpCallback",
  origin: "&origin=*",
};

export const fetchWikipediaSearch = (searchString) =>
  `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${searchString}&prop=extracts&explaintext=1`;

export const fetchWikipediaSearchResultsImages = (pageid, thumbSize) =>
  `https://en.wikipedia.org/w/api.php?action=query&pageids=${pageid}&prop=pageimages&pithumbsize=${thumbSize}&format=json&origin=*`;

export const fetchWikipediaGetArticleSummeryByTitle = (searchString) =>
  `https://en.wikipedia.org/api/rest_v1/page/summary/${searchString}`;

export const fetchWikipediaArticleByIdURL = (pageid) => {
  const callUrl =
    props.baseUrl +
    props.action +
    props.format +
    props.props +
    "&pageids=" +
    pageid +
    props.sections +
    props.rvprops +
    props.rvsections +
    // exintro +
    // exlimit +
    props.pithumbsize +
    props.pilimit +
    props.callback +
    props.origin;

  return callUrl;
  // return `https://en.wikipedia.org/w/api.php?action=query&format=${"json"}&prop=extracts&pageids=${pageid}&exintro=1&callback=jsonpCallback&origin=*`;
};

export const fetchWikipediaLoadArticleImages = (pageid, selectedImageSize) =>
  `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&pageids=${pageid}&piprop=${selectedImageSize}&origin=*`;

export const fetchWikipediaGetArticleByTitle = (searchString) =>
  `https://en.wikipedia.org/wiki/${searchString}`;

export const fetchWikipediaGetArticleByPageId = (pageid) =>
  `https://en.wikipedia.org/api/rest_v1/page/summary/${pageid}`;

export const fetchWikipediaGetArticlByWikibase_item = (wikibase_item) =>
  `https://en.wikipedia.org/api/rest_v1/page/summary/${wikibase_item}`;
