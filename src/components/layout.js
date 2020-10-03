import React, { useState } from "react"
import PropTypes from "prop-types"
import magics from "../data.json"
import Header from "./header"
import Content from "./content"
import { Button } from "react-bootstrap"
import "./layout.css"
import "./content.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./main.css"

const Layout = () => {
  const [magicIndex, setMagicIndex] = useState(0)

  const increaseMagicIndex = () =>
    setMagicIndex(magicIndex < 27 ? magicIndex + 1 : 0)

  const decreaseMagicIndex = () =>
    setMagicIndex(magicIndex > 0 ? magicIndex - 1 : 0)

  return (
    <div className="demo">
      <div className="content">
        <div id="large-header" className="large-header">
          <canvas id="demo-canvas"></canvas>
          <div style={{ position: "absolute", top: "10px" }}>
            <Header
              siteTitle={magics[magicIndex].title}
              magicIndex={magicIndex}
            />
            <Content content={magics[magicIndex].content} />
            <div className="buttonsContainer">
              <Button
                type="button"
                className="button btn btn-primary"
                onClick={decreaseMagicIndex}
              >
                קסם קודם
              </Button>
              <Button
                type="button"
                className="button btn btn-primary"
                onClick={increaseMagicIndex}
              >
                קסם הבא
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
