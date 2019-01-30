from aiohttp import web
import aiohttp_cors

from routes import sentiment

def server ():
    app = web.Application()

    cors = aiohttp_cors.setup(app, defaults={
        "*": aiohttp_cors.ResourceOptions(
                allow_credentials=True,
                expose_headers="*",
                allow_headers="*",
            )
    })

    app.add_routes([
        web.get('/sentiment', sentiment.get_person_sentiment),
    ])

    # Configure CORS on all routes.
    for route in list(app.router.routes()):
        cors.add(route)


    web.run_app(app)
