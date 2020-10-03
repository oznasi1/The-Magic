import styled from "styled-components"

export const ContentContainer = styled.div.attrs(() => ({
  className: "ContentContainer",
}))`
  overflow-y: auto;
`

export const Row = styled.div`
  display: flex;
  align-items: baseline;
`

export const Number = styled.div`
  color: #0069d9;
  font-weight: 700;
`

export const Step = styled.div`
  color: white;
  margin: 10px;
  text-align: right;
`
