import React, { createContext, useContext, useState } from 'react'

const StormContext = createContext()

export const useStorm = () => useContext(StormContext)

export const StormProvider = ({ children }) => {
  const [activeStorm, setActiveStorm] = useState({
    name: "Cyclone Amphan (Consensus Model)",
    category: "Super Cyclonic Storm",
    confidence: 88,
    lastUpdated: "2026-07-06 11:30:00",
    landfallETA: "14 Hours 30 Mins",
  })
  
  const [timelineIndex, setTimelineIndex] = useState(0) // 0=NOW, 1=+6h, 2=+12h, etc.
  const [selectedLocation, setSelectedLocation] = useState("")
  const [copilotMessages, setCopilotMessages] = useState([])
  const [alerts, setAlerts] = useState([
    { id: 1, text: "Cyclone Amphan intensified to Super Cyclonic Storm (Cat-5)", time: "10:15 AM" },
    { id: 2, text: "Landfall trajectory shifted south-west by 15km", time: "10:02 AM" }
  ])

  return (
    <StormContext.Provider value={{
      activeStorm,
      setActiveStorm,
      timelineIndex,
      setTimelineIndex,
      selectedLocation,
      setSelectedLocation,
      copilotMessages,
      setCopilotMessages,
      alerts,
      setAlerts
    }}>
      {children}
    </StormContext.Provider>
  )
}
