import React, { createContext, useContext, useState, useEffect } from "react";

const StormContext = createContext();

export const useStorm = () => useContext(StormContext);

const forecastData = [
  {
    windSpeed: "165 km/h",
    pressure: "965 hPa",
    confidence: 88,
    landfallETA: "72 Hours",
  },
  {
    windSpeed: "180 km/h",
    pressure: "950 hPa",
    confidence: 90,
    landfallETA: "48 Hours",
  },
  {
    windSpeed: "205 km/h",
    pressure: "935 hPa",
    confidence: 92,
    landfallETA: "24 Hours",
  },
  {
    windSpeed: "225 km/h",
    pressure: "920 hPa",
    confidence: 94,
    landfallETA: "12 Hours",
  },
  {
    windSpeed: "240 km/h",
    pressure: "912 hPa",
    confidence: 96,
    landfallETA: "6 Hours",
  },
  {
    windSpeed: "250 km/h",
    pressure: "905 hPa",
    confidence: 98,
    landfallETA: "Landfall Imminent",
  },
];

export const StormProvider = ({ children }) => {
  const [activeStorm, setActiveStorm] = useState({
    name: "Cyclone Amphan",
    category: "Super Cyclonic Storm",
    windSpeed: "240 km/h",
    pressure: "912 hPa",
    movement: "North-West (18 km/h)",
    coordinates: "19.6°N, 86.3°E",
    confidence: 92,
    landfall: "Puri Coast, Odisha",
    landfallETA: "14 Hours 30 Mins",
    lastUpdated: "06 Jul 2026 • 11:30 UTC",
  });

  const [timelineIndex, setTimelineIndex] = useState(0);
  const currentForecast = forecastData[timelineIndex];

  const [selectedLocation, setSelectedLocation] = useState("");
  const [copilotMessages, setCopilotMessages] = useState([]);

  const [alerts, setAlerts] = useState([
    {
      id: 1,
      text: "Cyclone Amphan intensified to Super Cyclonic Storm (Cat-5)",
      time: "10:15 AM",
    },
    {
      id: 2,
      text: "Landfall trajectory shifted south-west by 15km",
      time: "10:02 AM",
    },
  ]);

  const fetchAnalysis = async () => {
    try {
      const response = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: "Analyze current cyclone",
        }),
      });

      const data = await response.json();

      console.log(data);

      if (data.analysis && data.forecast) {
        setActiveStorm((prev) => ({
          ...prev,
          name: data.analysis.storm,
          category: data.analysis.category,
          windSpeed: data.analysis.wind_speed,
          pressure: data.analysis.pressure,
          confidence: data.forecast.confidence,
          landfall: data.forecast.landfall,
          landfallETA: data.forecast.eta,
        }));
      }

      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    fetchAnalysis();
  }, []);

  return (
    <StormContext.Provider
      value={{
        activeStorm,
        setActiveStorm,
        timelineIndex,
        setTimelineIndex,
        currentForecast,
        selectedLocation,
        setSelectedLocation,
        copilotMessages,
        setCopilotMessages,
        alerts,
        setAlerts,
        fetchAnalysis,
      }}
    >
      {children}
    </StormContext.Provider>
  );
};