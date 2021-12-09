import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="base">
    <div className="items">
      <div class=" flex space-x-4 ">
        <h1 style={{ margin: 0, fontSize: `1rem` }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <Link
          to="https://be.contentful.com/login"
          class="menu-button self-end "
        >
          Go to Dashboard
        </Link>
      </div>
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
