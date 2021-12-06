import * as React from "react"
import { Link } from "gatsby"

import "./author-card.scss"

const CardComponent = ({ node }) => {
  return (
    <Link to={node.blogSlug}>
      <div class="card">
        <h2>{node.authorName}</h2>
        <h4>{node.authorRole}</h4>
        <p>{node.authorAbout.authorAbout}</p>
        <a href={node.authorTwitter}>Twitter bio</a>
      </div>
    </Link>
  )
}

const Cards = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2  gap-x-2 gap-y-6 mt-6 mb-12">
      {posts.map(post => (
        <CardComponent key={post.node.id} node={post.node} />
      ))}
    </div>
  )
}

export default Cards
