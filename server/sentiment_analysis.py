import json

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import requests

def analize_sentence_sentiment(sentence):
    sentiment_analyzer = SentimentIntensityAnalyzer()
    return sentiment_analyzer.polarity_scores(sentence)

def translate_sentence(sentence, source_lang):
    if source_lang == 'en':
        return sentence
    to_lang = 'en'
    headers = {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
        'Accept-Encoding': 'none',
        'Accept-Language': 'en-US,en;q=0.8',
        'Connection': 'keep-alive'
    }

    # Use memory Net for translation http://mymemory.translated.net
    api_url = f'http://mymemory.translated.net/api/get?q={sentence}&langpair={source_lang}|{to_lang}'

    response = requests.get(api_url, headers=headers)
    response_json = json.loads(response.text)
    translation = response_json["responseData"]["translatedText"]
    return translation

def sentence_sentiment_analysis (sentence, source_lang='en'):
    translated  = translate_sentence(sentence, source_lang)
    return analize_sentence_sentiment(translated)

if __name__ == '__main__':
    polarity = analize_sentence_sentiment("""I am is very smart, handsome, and funny""")
    print(polarity)
    polarity = sentence_sentiment_analysis("""Hoy es un gran dia para el sentimiento""", 'es')
    print(polarity)
