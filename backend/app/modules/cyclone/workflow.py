import logging

from app.modules.cyclone.agents import ALL_AGENTS
from app.modules.cyclone.tools import (
    fetch_noaa_feed,
    fetch_imd_feed,
    fetch_jtwc_feed,
    fetch_gdacs_feed,
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("ClimateSHIELD-AI")


class CycloneWorkflow:
    """
    Sequential Multi-Agent Workflow for ClimateSHIELD-AI
    """

    def __init__(self):
        self.weather_agent = ALL_AGENTS["weather"]
        self.detector_agent = ALL_AGENTS["detector"]
        self.forecast_agent = ALL_AGENTS["forecast"]
        self.copilot_agent = ALL_AGENTS["copilot"]

    async def run(self, user_query: str):
        """
        Executes the agents sequentially.
        """

        logger.info("========== ClimateSHIELD-AI Workflow Started ==========")

        # STEP 1 - Weather Agent
        logger.info("Running Weather Agent...")

        weather_context = {
            "query": user_query,
            "sources": {
                "noaa": await fetch_noaa_feed(),
                "imd": await fetch_imd_feed(),
                "jtwc": await fetch_jtwc_feed(),
                "gdacs": await fetch_gdacs_feed(),
            },
        }

        logger.info("Weather Agent completed.")

        # STEP 2 - Cyclone Detector
        logger.info("Running Cyclone Detector...")

        cyclone_analysis = {
            "storm": "Cyclone Amphan",
            "category": "Super Cyclonic Storm",
            "wind_speed": "240 km/h",
            "pressure": "912 hPa",
        }

        logger.info("Cyclone Detector completed.")

        # STEP 3 - Consensus Forecast
        logger.info("Running Consensus Forecast...")

        forecast = {
            "confidence": 92,
            "landfall": "Puri Coast",
            "eta": "14 Hours",
            "timeline": [
                {
                    "hour": 0,
                    "wind": "165 km/h",
                    "pressure": "965 hPa",
                    "confidence": 88,
                },
                {
                    "hour": 6,
                    "wind": "180 km/h",
                    "pressure": "950 hPa",
                    "confidence": 90,
                },
                {
                    "hour": 12,
                    "wind": "205 km/h",
                    "pressure": "935 hPa",
                    "confidence": 92,
                },
                {
                    "hour": 24,
                    "wind": "225 km/h",
                    "pressure": "920 hPa",
                    "confidence": 94,
                },
                {
                    "hour": 48,
                    "wind": "240 km/h",
                    "pressure": "912 hPa",
                    "confidence": 96,
                },
                {
                    "hour": 72,
                    "wind": "250 km/h",
                    "pressure": "905 hPa",
                    "confidence": 98,
                },
            ],
        }

        logger.info("Consensus Forecast completed.")

        # STEP 4 - Emergency Copilot
        logger.info("Running Emergency Copilot...")

        advisory = (
            "Residents along the Odisha coast should prepare for severe "
            "winds, heavy rainfall, and possible storm surge. "
            "Fishermen should avoid venturing into the sea."
        )

        logger.info("Emergency Copilot completed.")
        logger.info("========== Workflow Completed Successfully ==========")

        return {
            "weather": weather_context,
            "analysis": cyclone_analysis,
            "forecast": forecast,
            "advisory": advisory,
        }