import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Cards from "../components/blog-card"

import Seo from "../components/seo"

const Blogs = ({ data }) => {
  return (
    <Layout>
      <Seo title="Blogs" />
      <h1> Blog Posts </h1>
      <p> Check out our posts</p>

      <div>
        <Cards posts={data.allContentfulBlogPost.edges} />
      </div>
    </Layout>
  )
}

export default Blogs

export const blogQuery = graphql`
  query blogQuery {
    allContentfulBlogPost(sort: { fields: blogPublished, order: DESC }) {
      edges {
        node {
          id
          blogSlug
          blogTitle
          blogPublished
          blogEntry {
            raw
          }
        }
      }
    }
  }
`
