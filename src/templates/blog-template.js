import * as React from "react"
import { graphql, Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(blogSlug: { eq: $slug }) {
      blogTitle
      blogPublished(formatString: "Do MMMM, YYYY")
      blogEntry {
        raw
      }
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
      <Seo title={props.data.contentfulBlogPost.blogTitle} />
      <h1>{props.data.contentfulBlogPost.blogTitle}</h1>
      <p>{props.data.contentfulBlogPost.blogPublished}</p>
      <main>
        {" "}
        <div>
          {renderRichText(props.data.contentfulBlogPost.blogEntry)}
        </div>{" "}
      </main>
    </Layout>
  )
}

export default BlogPost
