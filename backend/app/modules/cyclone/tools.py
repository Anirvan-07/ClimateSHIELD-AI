import httpx

# -----------------------------
# IMD (placeholder for future API)
# -----------------------------
async def fetch_imd_feed():
    return {
        "source": "IMD",
        "status": "placeholder",
        "message": "Official IMD integration coming next."
    }


# -----------------------------
# NOAA Active Storms
# -----------------------------
async def fetch_noaa_feed():
    url = "https://www.nhc.noaa.gov/CurrentStorms.json"

    try:
        async with httpx.AsyncClient(timeout=20) as client:
            response = await client.get(url)
            response.raise_for_status()

        return {
            "source": "NOAA",
            "status": "success",
            "data": response.json()
        }

    except Exception as e:
        return {
            "source": "NOAA",
            "status": "failed",
            "error": str(e)
        }


# -----------------------------
# JTWC
# -----------------------------
async def fetch_jtwc_feed():
    return {
        "source": "JTWC",
        "status": "placeholder"
    }


# -----------------------------
# GDACS
# -----------------------------
async def fetch_gdacs_feed():
    return {
        "source": "GDACS",
        "status": "placeholder"
    }