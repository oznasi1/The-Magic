import React from "react"
import { ContentContainer, Row, Number, Step } from "./content.styles"

const Content = ({ content }) => (
  <ContentContainer>
    {content.map((step, index) => (
      <Row>
        <Number>{`${index + 1}. `}</Number>
        <Step>{`${step}`}</Step>
      </Row>
    ))}
  </ContentContainer>
)

export default Content
