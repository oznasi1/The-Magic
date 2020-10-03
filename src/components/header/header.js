import PropTypes from "prop-types"
import React from "react"
import { HeaderContainer } from "./header.styled"

const Header = ({ siteTitle, magicIndex }) => (
  <HeaderContainer>
    <h1>
      {`
          ${magicIndex + 1}.
          ${siteTitle}
      `}
    </h1>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
