import React from 'react'
import { useStorm } from '../../context/StormContext'

const steps = ["NOW", "+6 Hours", "+12 Hours", "+24 Hours", "+48 Hours", "+72 Hours"]

function TimelineSlider() {
  const { timelineIndex, setTimelineIndex } = useStorm()

  return (
    <div className="timeline-slider-panel glass-panel" style={{ margin: '1rem', padding: '0.75rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.8rem' }}>
        <span>AI Forecast Time Machine</span>
        <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>Active Step: {steps[timelineIndex]}</span>
      </div>
      <input 
        type="range" 
        min="0" 
        max={steps.length - 1} 
        value={timelineIndex} 
        onChange={(e) => setTimelineIndex(parseInt(e.target.value))}
        style={{ width: '100%', cursor: 'pointer' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem', fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
        {steps.map((step, idx) => (
          <span key={idx} style={{ fontWeight: timelineIndex === idx ? 'bold' : 'normal', color: timelineIndex === idx ? 'var(--text-primary)' : 'inherit' }}>
            {step}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TimelineSlider
