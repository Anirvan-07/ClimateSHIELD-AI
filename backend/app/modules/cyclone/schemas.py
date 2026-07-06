from pydantic import BaseModel
from typing import List, Optional

class CycloneTrackPoint(BaseModel):
    latitude: float
    longitude: float
    wind_speed_kts: float
    pressure_hpa: float
    forecast_hour: int

class CycloneForecast(BaseModel):
    storm_id: str
    storm_name: str
    category: str
    current_position: CycloneTrackPoint
    forecast_track: List[CycloneTrackPoint]
    cone_of_uncertainty: List[List[float]]
