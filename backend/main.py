import uvicorn
from models import urlModel
from fastapi import FastAPI
from checker import getResponseCode
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_origins=origins,
    allow_credentials=True,
)


@app.post("/checkURL")
def checkURL(url: urlModel):
    return getResponseCode(url.url)


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=1202, workers=1, reload=True)
