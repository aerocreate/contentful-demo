import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Card from "../components/card"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello internet!</h1>
    <div class="flex flex-wrap">
      <div class="grid grid-cols-3">
        <Card title="Blogs" description=" Check out our posts" link="/blogs" />
        {/*    <Card
          title="Portfolio"
          description="Check out our pieces"
          link="/portfolios"
        />
      */}{" "}
        <Card
          title="Products"
          description="Check out our Products"
          link="/products"
        />
        <Card
          title="Authors"
          description=" Check out our authors"
          link="/authors"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
