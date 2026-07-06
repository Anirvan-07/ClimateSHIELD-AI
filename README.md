# 🌪️ ClimateSHIELD-AI

> A Multi-Agent AI Disaster Intelligence Platform for real-time cyclone monitoring, forecasting, and emergency response.

ClimateSHIELD-AI is an AI-powered decision support platform built using **Google ADK**, **FastAPI**, **React**, and **Leaflet**. The system combines multiple specialized AI agents to analyze meteorological information, generate consensus forecasts, and provide actionable public safety advisories through an interactive operations dashboard.

---

# 🚀 Project Highlights

- 🌍 Interactive cyclone monitoring dashboard
- 🤖 Multi-Agent AI architecture using Google ADK
- 🛰️ Weather intelligence pipeline (NOAA / IMD / JTWC / GDACS scaffold)
- 🗺️ Interactive Leaflet digital map
- 📈 Forecast timeline visualization
- ⚡ FastAPI backend
- ⚛️ React + Vite frontend
- 🚨 AI-generated emergency advisories
- 📊 Confidence-based cyclone forecasting

---

# 🏗️ Multi-Agent Architecture

```
Weather Data Agent
        │
        ▼
Cyclone Detection Agent
        │
        ▼
Consensus Forecast Agent
        │
        ▼
Emergency Copilot
        │
        ▼
Interactive Dashboard
```

Each AI agent performs a dedicated task before passing structured information to the next stage of the workflow.

---

# 🛠️ Tech Stack

### Frontend

- React
- Vite
- Leaflet
- React Leaflet

### Backend

- FastAPI
- Python 3.11
- Google ADK
- Pydantic

### AI

- Gemini 2.5 Flash
- Google Agent Development Kit (ADK)

---

# 📂 Project Structure

```
ClimateSHIELD-AI/

├── backend/
│   ├── app/
│   ├── modules/
│   ├── workflow.py
│   ├── agents.py
│   └── tools.py
│
├── frontend/
│   ├── components/
│   ├── context/
│   └── Map/
│
└── README.md
```

---

# 🚀 Getting Started

## Backend

```bash
python -m venv .venv

.venv\Scripts\activate

pip install -r backend/requirements.txt

python backend/main.py
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🎯 Kaggle Capstone Track

**Track:** Agents for Good

ClimateSHIELD-AI focuses on disaster preparedness by assisting emergency responders and citizens with AI-assisted cyclone monitoring and decision support.

---

# 📌 Current Features

- ✅ Multi-Agent workflow
- ✅ Interactive cyclone dashboard
- ✅ AI advisory panel
- ✅ Forecast timeline
- ✅ FastAPI backend
- ✅ REST API
- ✅ Context-based frontend state management

---

# 🔮 Future Roadmap

- Live NOAA integration
- Live IMD integration
- JTWC forecast ingestion
- GDACS alert integration
- Native Google ADK Runner orchestration
- Persistent memory
- Flood Intelligence Module
- Heatwave Intelligence Module
- Wildfire Intelligence Module
- Earthquake Intelligence Module
- Unified Climate Risk Platform

---

# 👨‍💻 Author

**Anirvan Mohapatra**

B.Tech CSE (AI & ML)

Sri Sri University

---

## ⭐ If you found this project interesting, consider giving it a star!
