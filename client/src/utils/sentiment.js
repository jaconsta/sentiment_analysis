import vader from 'vader-sentiment'

export const analyzeSentiment = sentence => {
  return vader.SentimentIntensityAnalyzer.polarity_scores(sentence)
}
