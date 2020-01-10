import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, magicIndex }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      display: 'flex'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className='animated infinite bounce delay-2s' style={{ margin: 0, alignContent:'center' }}>
          {`
          ${magicIndex+1}.
          ${siteTitle}
          `}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
