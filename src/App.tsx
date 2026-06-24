import { useEffect } from "react";
import "./App.css";

const SNOW_COUNT = 40;

export default function App() {
  useEffect(() => {
    const container = document.querySelector<HTMLDivElement>(".snow-container");

    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < SNOW_COUNT; i++) {
      const snow = document.createElement("span");

      snow.className = "snowflake";
      snow.textContent = "❄";

      snow.style.left = `${Math.random() * 100}%`;
      snow.style.fontSize = `${Math.random() * 10 + 8}px`;
      snow.style.animationDuration = `${Math.random() * 7 + 5}s`;
      snow.style.animationDelay = `${Math.random() * 3}s`;

      container.appendChild(snow);
    }
  }, []);

  return (
    <div className="page">
      {/* Snow */}
      <div className="snow-container" />

      {/* Main Content */}
      <div className="container">
        <div className="content">
          <div className="logo">
            <span className="accent">D</span>ffrnt
          </div>

          <div className="tag">New Fashion Experience Coming Soon</div>

          <h1>
            We're Building Something <br /> Dffrnt</h1>

          <p>
            Our new clothing store is currently under construction. We're
            creating a unique shopping experience with premium styles, modern
            collections, and a fresh fashion identity.
          </p>
        </div>
      </div>

    </div>
  );
}