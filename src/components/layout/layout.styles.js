import styled from "styled-components"
import { Button as Btn } from "react-bootstrap"

export const LayoutContainer = styled.div.attrs(() => ({
  className: "demo",
}))`
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg");
`

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
}))`
  height: 700px;
  position: relative;
  width: 100%;
  background: #111;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  z-index: 1;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg");
`

export const StyledContent = styled.div.attrs(() => ({
  className: "content",
}))``
