import styled from "styled-components"
import { Button as Btn } from "react-bootstrap"

export const LayoutContainer = styled.div.attrs(() => ({
  className: "demo",
}))``

export const Container = styled.div`
  position: absolute;
  top: 10px;
`
export const Button = styled(Btn).attrs(() => ({
  type: "button",
  className: "btn btn-primary",
}))`
  width: fit-content;
  align-self: center;
  margin: 10px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 25px;
  width: 100%;
`

export const Canvas = styled.canvas.attrs(() => ({
  id: "demo-canvas",
}))``

export const LargeHeader = styled.div.attrs(() => ({
  id: "large-header",
  className: "large-header",
}))``
export const StyledContent = styled.div.attrs(() => ({
  className: "content",
}))``
