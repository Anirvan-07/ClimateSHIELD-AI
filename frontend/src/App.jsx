import React from 'react'
import { StormProvider } from './context/StormContext'
import MapViewer from './components/Map/MapViewer'
import StatsPanel from './components/Sidebar/StatsPanel'
import AdvisoryCard from './components/Advisory/AdvisoryCard'
import TimelineSlider from './components/Timeline/TimelineSlider'
import QAPanel from './components/Insights/QAPanel'
import AlertTicker from './components/AlertEngine/AlertTicker'
import ConsensusGrid from './components/Validation/ConsensusGrid'

function App() {
  return (
    <StormProvider>
      <div className="eoc-dashboard">
        <header className="eoc-header">
          <div className="eoc-logo">ClimateSHIELD-AI</div>
          <div className="eoc-status">
            <span className="live-badge">● LIVE</span>
            <span>Emergency Operations Center</span>
          </div>
        </header>

        <AlertTicker />

        <main className="eoc-main-content">
          <section className="eoc-sidebar-left">
            <StatsPanel />
            <ConsensusGrid />
          </section>

          <section className="eoc-map-container">
            <MapViewer />
            <TimelineSlider />
          </section>

          <section className="eoc-sidebar-right">
            <AdvisoryCard />
            <QAPanel />
          </section>
        </main>
      </div>
    </StormProvider>
  )
}

export default App
