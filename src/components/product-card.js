import * as React from "react"
import { Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import "./blog-card.scss"

const CardComponent = ({ node }) => {
  return (
    <div class="card">
      <h2>{node.productName}</h2>
      <p>{node.productPrice}</p>
    </div>
  )
}

const Cards = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2  gap-x-2 gap-y-6 mt-6 mb-12">
      {posts.map(post => (
        <CardComponent key={post.node.productSlug} node={post.node} />
      ))}
    </div>
  )
}

export default Cards
