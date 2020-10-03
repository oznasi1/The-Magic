import React from "react"

const Content = ({ content }) => (
  <div style={{ overflowY: "auto", height: "355px" }}>
    {content.map((step, index) => (
      <div className="step">{`${index + 1}. ${step}`}</div>
    ))}
  </div>
)

export default Content
