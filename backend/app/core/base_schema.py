from pydantic import BaseModel
from typing import List, Optional

class Coordinates(BaseModel):
    latitude: float
    longitude: float

class TimelineStep(BaseModel):
    timestamp: str
    latitude: float
    longitude: float
    wind_speed_kts: float
    pressure_hpa: float
    category: str
    rainfall_mm: float
    flood_risk: str
    advisory: str

class DisasterReport(BaseModel):
    threat_name: str
    confidence_score: float
    data_sources: List[str]
    last_updated: str
    prediction_timestamp: str
    timeline: List[TimelineStep]
