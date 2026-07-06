import React from 'react'

function AdvisoryCard() {
  return (
    <div className="advisory-card glass-panel">
      <h3>AI-Generated Public Advisory</h3>
      <p style={{ fontSize: '0.85rem', lineHeight: '1.4', color: 'var(--text-secondary)' }}>
        Warning: Evacuate low-lying areas. Wind gusts up to 150 kts expected near landfall. Safe shelters are open in local public school sectors.
      </p>
      <div style={{ fontSize: '0.7rem', color: 'var(--accent-orange)', marginTop: '0.5rem', fontWeight: 'bold' }}>
        * Official warnings from regional meteorological agencies always take precedence.
      </div>
    </div>
  )
}

export default AdvisoryCard
