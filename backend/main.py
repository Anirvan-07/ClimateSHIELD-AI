import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.modules.cyclone.workflow import CycloneWorkflow
app = FastAPI(
    title="ClimateSHIELD-AI API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

workflow = CycloneWorkflow()


class AnalyzeRequest(BaseModel):
    query: str


@app.get("/")
def read_root():
    return {
        "message": "ClimateSHIELD-AI Multi-Agent API"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.post("/analyze")
async def analyze(request: AnalyzeRequest):
    result = await workflow.run(request.query)
    return result


if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )