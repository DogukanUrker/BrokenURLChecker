import requests


def getResponseCode(url):
    try:
        return {"responseCode": requests.get(url).status_code}
    except:
        return {"responseCode": 404}
