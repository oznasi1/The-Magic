import React, { useState } from "react"
import PropTypes from "prop-types"
import magics from "../data.json"
import Header from "./header"
import Content from "./content"
import { Button } from "react-bootstrap"
import "./layout.css"
import "./content.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = () => {
  const randomMagicIndex = () => Math.floor(Math.random() * 27 + 0)

  const [magicIndex, setMagicIndex] = useState(0)

  const setRandomMagicIndex = () => setMagicIndex(randomMagicIndex)

  const increaseMagicIndex = () => setMagicIndex(magicIndex + 1)

  const decreaseMagicIndex = () =>
    setMagicIndex(magicIndex > 0 ? magicIndex - 1 : 0)

  return (
    <div className="app-container">
      <Header siteTitle={magics[magicIndex].title} magicIndex={magicIndex} />
      <Content content={magics[magicIndex].content} />
      <div className="buttonsContainer">
        <Button
          type="button"
          class="btn btn-primary"
          className="button"
          onClick={decreaseMagicIndex}
        >
          קסם קודם
        </Button>
        <Button
          type="button"
          class="btn btn-primary"
          className="button"
          onClick={increaseMagicIndex}
        >
          קסם הבא
        </Button>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
