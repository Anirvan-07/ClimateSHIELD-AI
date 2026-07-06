import React from 'react'
import { useStorm } from '../../context/StormContext'

function StatsPanel() {
  const { activeStorm } = useStorm()

  return (
    <div className="stats-panel glass-panel">
      <h2>{activeStorm.name}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '1rem' }}>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.5rem', borderRadius: '6px' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>STORM CATEGORY</div>
          <div style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--accent-red)' }}>{activeStorm.category}</div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.5rem', borderRadius: '6px' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>LANDFALL ETA</div>
          <div style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--accent-orange)' }}>{activeStorm.landfallETA}</div>
        </div>
      </div>
    </div>
  )
}

export default StatsPanel
