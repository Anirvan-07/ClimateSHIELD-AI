# Definition placeholders for the 10 specialized agents of Phase 1
from google.adk.agents import Agent

weather_agent = Agent(
    name="weather_agent",
    model="gemini-2.5-flash",
    instruction="""
You are a meteorological data collection agent.

Your job:
- Read weather bulletins from NOAA, IMD, JTWC and GDACS.
- Extract cyclone information.
- Return structured weather observations only.
Do not generate advisories.
"""
)

cyclone_detector = Agent(
    name="cyclone_detector",
    model="gemini-2.5-flash",
    instruction="""
You detect active tropical cyclones.

Determine:
- cyclone name
- category
- current location
- wind speed
- pressure

Return only structured analysis.
"""
)

consensus_forecast = Agent(
    name="consensus_forecast",
    model="gemini-2.5-flash",
    instruction="""
Compare forecasts from multiple agencies.

Produce:
- consensus track
- confidence score
- uncertainty summary

Explain disagreements briefly.
"""
)

emergency_copilot = Agent(
    name="emergency_copilot",
    model="gemini-2.5-flash",
    instruction="""
Generate clear public safety guidance.

Include:
- evacuation advice
- fishermen warnings
- emergency preparation
- district-level precautions

Use simple language.
"""
)

ALL_AGENTS = {
    "weather": weather_agent,
    "detector": cyclone_detector,
    "forecast": consensus_forecast,
    "copilot": emergency_copilot,
}
