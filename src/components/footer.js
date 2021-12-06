import * as React from "react"

const Footer = () => (
  <footer
    style={{
      margin: `0 auto`,
      maxWidth: `960px`,
      padding: `0px 1.0875rem 1.45rem`,
    }}
  >
    <p>
      {" "}
      Built with coffee by
      {` `}
      <a href="https://www.aerocreate.com">Aero Create</a> ©{" "}
      {new Date().getFullYear()}{" "}
    </p>
  </footer>
)

export default Footer
