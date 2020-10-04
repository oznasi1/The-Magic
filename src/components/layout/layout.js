import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import magics from "../../data.json"
import Header from "../header/header"
import Content from "../content/content"
import {
  LayoutContainer,
  Container,
  Button,
  ButtonContainer,
  Canvas,
  LargeHeader,
  StyledContent,
} from "./layout.styles"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = () => {
  let currentMagicIndex = localStorage.getItem("magicIndex")
    ? JSON.parse(localStorage.getItem("magicIndex"))
    : 0
  const [magicIndex, setMagicIndex] = useState(currentMagicIndex)

  const increaseMagicIndex = () =>
    setMagicIndex(magicIndex < 27 ? magicIndex + 1 : 0)

  const decreaseMagicIndex = () =>
    setMagicIndex(magicIndex > 0 ? magicIndex - 1 : 0)

  useEffect(() => {
    localStorage.setItem("magicIndex", magicIndex)
  }, [magicIndex])

  return (
    <LayoutContainer>
      <StyledContent>
        <LargeHeader>
          <Canvas />
          <Container>
            <Header
              siteTitle={magics[magicIndex].title}
              magicIndex={magicIndex}
            />
            <Content content={magics[magicIndex].content} />
            <ButtonContainer>
              <Button disabled={magicIndex === 0} onClick={decreaseMagicIndex}>
                קסם קודם
              </Button>
              <Button onClick={increaseMagicIndex}>
                {magicIndex === 27 ? "התחל מחדש" : "קסם הבא"}
              </Button>
            </ButtonContainer>
          </Container>
        </LargeHeader>
      </StyledContent>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
