import React, { useState } from "react"
import PropTypes from "prop-types"
import magics from "../data.json"
import Header from "./header"
import Content from "./content"
import "./layout.css"
import "./content.css"

const Layout = () => {
  const randomMagicIndex = () => Math.floor(Math.random() * 27 + 0)

  const [magicIndex, setMagicIndex] = useState(randomMagicIndex)

  const setRandomMagicIndex = () => setMagicIndex(randomMagicIndex)

  const increaseMagicIndex = () => setMagicIndex(magicIndex + 1)

  const decreaseMagicIndex = () => setMagicIndex(magicIndex - 1)

  return (
    <div className="container">
      <Header siteTitle={magics[magicIndex].title} magicIndex={magicIndex} />
      <Content content={magics[magicIndex].content} />
      <div className="buttonsContainer">
        <button className="button" onClick={decreaseMagicIndex}>
          קסם קודם
        </button>
        <button className="button" onClick={increaseMagicIndex}>
          קסם הבא
        </button>
        <button className="button" onClick={setRandomMagicIndex}>
          קסם אחר
        </button>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
