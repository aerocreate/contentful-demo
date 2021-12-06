import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Cards from "../components/product-card"

import Seo from "../components/seo"

const Products = ({ data }) => {
  return (
    <Layout>
      <Seo title="Products" />
      <h1> Products</h1>
      <p> Check out our Products</p>

      <div>
        <Cards posts={data.allContentfulProduct.edges} />
      </div>
    </Layout>
  )
}

export default Products

export const productQuery = graphql`
  query productQuery {
    allContentfulProduct(sort: { fields: id }) {
      edges {
        node {
          id
          productSlug
          productPrice
          productName
          productDescription {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    }
  }
`
