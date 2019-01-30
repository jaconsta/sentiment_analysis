from aiohttp import web

from sentiment_analysis import sentence_sentiment_analysis

async def get_person_sentiment(request):
    text = request.rel_url.query.get('text', '')
    lang = request.rel_url.query.get('lang', 'en')
    print(text)

    response = sentence_sentiment_analysis(text, lang)

    return web.json_response(response)
