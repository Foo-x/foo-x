import React from "react"
import { graphql } from "gatsby"

import LayoutCommon from "../components/layout-common"
import SEO from "../components/seo"

const Archive = ({ data, location }) => {
  return (
    <LayoutCommon titleSvg={data.file.publicURL}>
      <SEO title="archive" location={location} />
      <article
        className="archive-page"
        itemScope
        itemType="http://schema.org/Article"
      ></article>
    </LayoutCommon>
  )
}

export default Archive

export const pageQuery = graphql`
  query {
    file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "archive.svg" }
    ) {
      publicURL
    }
  }
`
