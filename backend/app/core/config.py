import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    PROJECT_ID: str = os.getenv("GOOGLE_CLOUD_PROJECT", "climateshield-ai")
    LOCATION: str = os.getenv("GOOGLE_CLOUD_LOCATION", "us-central1")
    GEMINI_MODEL: str = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")

settings = Settings()
