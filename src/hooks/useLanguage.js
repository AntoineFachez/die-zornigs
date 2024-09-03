const useLanguage = async (language, inputText, setSentiment) => {
  const languageClient = new language.LanguageServiceClient();
  const document = {
    content: inputText,
    type: "PLAIN_TEXT",
  };

  const sentimentAnalysisRequest = {
    document: document,
    features: {
      sentiment: {
        documentSentiment: {
          detectSentiment: true,
        },
      },
    },
  };

  const sentimentAnalysisResponse = await languageClient.analyzeSentiment(
    sentimentAnalysisRequest,
  );
  const sentimentData = sentimentAnalysisResponse.documentSentiment;
  setSentiment({
    score: sentimentData.score,
    magnitude: sentimentData.magnitude,
  });
};
export default useLanguage;
