import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Cards from "../components/author-card"

import Seo from "../components/seo"

const Authors = ({ data }) => {
  return (
    <Layout>
      <Seo title="Authors" />
      <h1>Authors</h1>
      <p> Check out our authors</p>

      <div>
        <Cards posts={data.allContentfulAuthor.edges} />
      </div>
    </Layout>
  )
}

export default Authors

export const authorQuery = graphql`
  query authorQuery {
    allContentfulAuthor(sort: { fields: authorName, order: ASC }) {
      edges {
        node {
          authorName
          authorRole
          authorTwitter
          id
          authorAbout {
            authorAbout
          }
          authorPicture {
            id
          }
        }
      }
    }
  }
`
