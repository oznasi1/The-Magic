import React, { useState } from "react"
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
import "../main.css"

const Layout = () => {
  const [magicIndex, setMagicIndex] = useState(0)

  const increaseMagicIndex = () =>
    setMagicIndex(magicIndex < 27 ? magicIndex + 1 : 0)

  const decreaseMagicIndex = () =>
    setMagicIndex(magicIndex > 0 ? magicIndex - 1 : 0)

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
              <Button onClick={decreaseMagicIndex}>קסם קודם</Button>
              <Button onClick={increaseMagicIndex}>קסם הבא</Button>
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
