import * as React from "react"
import { Link } from "gatsby"

import "./card.scss"

const Card = ({ title, description, link }) => {
  return (
    <Link to={link}>
      <div class="card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default Card
