import requests


def getResponseCode(url):
    return {"responseCode": requests.get(url).status_code}
