import React from 'react'

function MapViewer() {
  return (
    <div className="map-viewer-placeholder glass-panel" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignDirs: 'center', height: '100%', minHeight: '400px' }}>
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <h3>Full-Screen Interactive Map & Digital Twin</h3>
        <p style={{ color: 'var(--text-secondary)' }}>Leaflet Map displaying rotating eye, wind particles, and cone of uncertainty will mount here.</p>
      </div>
    </div>
  )
}

export default MapViewer
