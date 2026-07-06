import React from "react";
import { useStorm } from "../../context/StormContext";
// import CycloneMarker from "./CycloneMarker";
import {
  MapContainer,
  TileLayer,
  Popup,
  Polyline,
  CircleMarker,
  Polygon,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Bay of Bengal cyclone path
const cyclonePositions = [
  [15.8, 88.5], // NOW
  [16.9, 87.8], // +6h
  [18.2, 87.0], // +12h
  [19.6, 86.3], // +24h
  [20.8, 86.0], // +48h
  [21.4, 85.8], // +72h
];

const uncertaintyCone = [
  [15.2, 89.4],
  [16.5, 88.9],
  [18.2, 88.1],
  [20.0, 87.0],
  [22.5, 86.2],

  [20.6, 85.4],
  [18.8, 85.7],
  [17.0, 86.2],
  [15.5, 87.0],
];

export default function MapViewer() {
  const { timelineIndex } = useStorm();

  const currentPosition = cyclonePositions[timelineIndex];
  return (
    <div
      className="glass-panel"
      style={{
        flex: 1,
        height: "100%",
        minHeight: "550px",
        overflow: "hidden",
        borderRadius: "12px",
      }}
    >
      <MapContainer
        center={[18.5, 87]}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="© Esri"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />

        <TileLayer
          attribution="© Esri"
          url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
        />

        <Polygon
          positions={uncertaintyCone}
          pathOptions={{
            color: "#ffffff",
            weight: 2,
            opacity: 0.6,
            fillColor: "#ffffff",
            fillOpacity: 0.18,
          }}
        />

        <Polyline
          positions={cyclonePositions}
          pathOptions={{
            color: "#00E5FF",
            weight: 4,
            dashArray: "10 8",
          }}
        />

        {/* Current cyclone */}
        <CircleMarker
          center={currentPosition}
          radius={12}
          pathOptions={{
            color: "#ff0033",
            fillColor: "#ff0033",
            fillOpacity: 1,
            weight: 3,
          }}
        >
          <Popup>
            <b>Cyclone Amphan</b>
            <br />
            Category: Super Cyclonic Storm
            <br />
            Wind: 240 km/h
            <br />
            Moving NW
          </Popup>
        </CircleMarker>

        {/* Forecast points */}
        {cyclonePositions.slice(1).map((point, i) => {
          const index = i + 1;

          return (
            <CircleMarker
              key={index}
              center={point}
              radius={index === timelineIndex ? 10 : 6}
              pathOptions={{
                color: index === timelineIndex ? "#ff0033" : "#ffaa00",
                fillColor: index === timelineIndex ? "#ff0033" : "#ffaa00",
                fillOpacity: 1,
              }}
            >
              <Popup>
                Forecast +{index * 6} Hours
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}