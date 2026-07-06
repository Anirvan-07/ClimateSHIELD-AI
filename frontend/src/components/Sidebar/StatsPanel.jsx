import React from "react";
import { useStorm } from "../../context/StormContext";

function StatsPanel() {
  const { activeStorm } = useStorm();

  const cardStyle = {
    background: "rgba(255,255,255,0.04)",
    padding: "0.8rem",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  const labelStyle = {
    color: "var(--text-secondary)",
    fontSize: "0.72rem",
    marginBottom: "4px",
  };

  const valueStyle = {
    color: "white",
    fontWeight: "700",
    fontSize: "1rem",
  };

  return (
    <div className="stats-panel glass-panel">
      <h2>{activeStorm.name}</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginTop: "18px",
        }}
      >
        <div style={cardStyle}>
          <div style={labelStyle}>CATEGORY</div>
          <div style={{ ...valueStyle, color: "#ff5050" }}>
            {activeStorm.category}
          </div>
        </div>

        <div style={cardStyle}>
          <div style={labelStyle}>WIND SPEED</div>
          <div style={valueStyle}>{activeStorm.windSpeed}</div>
        </div>

        <div style={cardStyle}>
          <div style={labelStyle}>PRESSURE</div>
          <div style={valueStyle}>{activeStorm.pressure}</div>
        </div>

        <div style={cardStyle}>
          <div style={labelStyle}>MOVEMENT</div>
          <div style={valueStyle}>{activeStorm.movement}</div>
        </div>

        <div style={cardStyle}>
          <div style={labelStyle}>LANDFALL</div>
          <div style={valueStyle}>{activeStorm.landfall}</div>
        </div>

        <div style={cardStyle}>
          <div style={labelStyle}>ETA</div>
          <div style={{ ...valueStyle, color: "#00d084" }}>
            {activeStorm.landfallETA}
          </div>
        </div>

        <div style={cardStyle}>
          <div style={labelStyle}>CONFIDENCE</div>
          <div style={valueStyle}>{activeStorm.confidence}%</div>
        </div>

        <div style={cardStyle}>
          <div style={labelStyle}>LAST UPDATED</div>
          <div style={{ fontSize: "0.82rem", color: "#ddd" }}>
            {activeStorm.lastUpdated}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsPanel;