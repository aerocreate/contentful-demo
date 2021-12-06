const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-template.js`)

  return graphql(
    `
      query {
        allContentfulBlogPost {
          edges {
            node {
              blogSlug
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allContentfulBlogPost.edges.forEach(edge => {
      createPage({
        path: `/blogs/${edge.node.blogSlug}`,
        component: blogPostTemplate,
        context: { slug: edge.node.blogSlug },
      })
    })
  })
}
