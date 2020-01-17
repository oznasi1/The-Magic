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

  const _setMagicIndex = () => setMagicIndex(randomMagicIndex)

  return (
    <div className="container">
      <Header siteTitle={magics[magicIndex].title} magicIndex={magicIndex} />
      <Content content={magics[magicIndex].content} />
      <button className="button" onClick={_setMagicIndex}>
        קסם אחר
      </button>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
