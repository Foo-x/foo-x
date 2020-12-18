import { graphql, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

import LayoutCommon from "../components/layout-common"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  console.log(data)
  return (
    <LayoutCommon titleSvg={data.notFound.publicURL}>
      <SEO title="404" location={location} url="/" />
      <article
        className="not-found-page"
        itemScope
        itemType="http://schema.org/Article"
      >
        <Img
          fluid={data.sleepingCat.childImageSharp.fluid}
          alt="sleeping-cat"
        />
        <section itemProp="articleBody">
          <Link to="/">トップへ</Link>
        </section>
      </article>
    </LayoutCommon>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    notFound: file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "404.svg" }
    ) {
      publicURL
    }
    sleepingCat: file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "sleeping-cat.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800, srcSetBreakpoints: [400, 800], toFormat: WEBP) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
