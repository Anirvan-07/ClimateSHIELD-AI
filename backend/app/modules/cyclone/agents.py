# Definition placeholders for the 10 specialized agents of Phase 1
from google.adk.agents import Agent

def get_agent_placeholders():
    return {
        "data_collector": "Data Collection Agent",
        "cyclone_detector": Agent(name="cyclone_detector", instruction="Detect active cyclones", model="gemini-2.5-flash"),
        "consensus_forecast": Agent(name="consensus_forecast", instruction="Combine and validate forecasts", model="gemini-2.5-flash"),
        "trajectory_prediction": Agent(name="trajectory_prediction", instruction="Predict storm path", model="gemini-2.5-flash"),
        "story_mode": Agent(name="story_mode", instruction="Narrate storm phases", model="gemini-2.5-flash"),
        "impact_assessment": Agent(name="impact_assessment", instruction="Model regional impact", model="gemini-2.5-flash"),
        "personalized_impact": Agent(name="personalized_impact", instruction="Generate local user risk report", model="gemini-2.5-flash"),
        "emergency_copilot": Agent(name="emergency_copilot", instruction="Answer evacuation and safety questions", model="gemini-2.5-flash"),
        "alert_engine": "Live Alert Engine Node",
        "visualization_agent": "Visualization Node"
    }
