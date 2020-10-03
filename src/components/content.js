import React from "react"

const Content = ({ content }) => (
  <div style={{ overflowY: "auto", height: "355px", margin: "10px" }}>
    {content.map((step, index) => (
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <span style={{ color: "#0069D9", fontWeight: 700 }}>{`${index +
          1}. `}</span>
        <div className="step">{`${step}`}</div>
      </div>
    ))}
  </div>
)

export default Content
