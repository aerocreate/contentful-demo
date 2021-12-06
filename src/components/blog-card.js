import * as React from "react"
import { Link } from "gatsby"

import "./blog-card.scss"

const CardComponent = ({ node }) => {
  return (
    <Link to={node.blogSlug}>
      <div class="card flex-auto">
        <h2>{node.blogTitle}</h2>
        <p>{node.blogPublished}</p>
      </div>
    </Link>
  )
}

const Cards = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2  gap-x-2 gap-y-6 mt-6 mb-12">
      {posts.map(post => (
        <CardComponent key={post.node.blogSlug} node={post.node} />
      ))}
    </div>
  )
}

export default Cards
