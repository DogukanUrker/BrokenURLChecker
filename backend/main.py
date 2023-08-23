import uvicorn
from models import urlModel
from fastapi import FastAPI
from checker import getResponseCode
from fastapi.responses import JSONResponse
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


@app.post("/checkURL", response_model=urlModel)
def checkURL(url: urlModel):
    try:
        return getResponseCode(url.url)
    except:
        return JSONResponse(status_code=401)


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, workers=1)
