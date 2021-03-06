import React from "react"
import { graphql } from "gatsby"

import LayoutCommon from "../components/layout-common"
import SEO from "../components/seo"
import Search from "../components/search"
import styles from "styles/pages/archive.module.css"

const Archive = ({ data, location }) => {
  const query = new URLSearchParams(location.search)
  return (
    <LayoutCommon
      titleSvg={data.file.publicURL}
      mainClassName="global-main-archive"
    >
      <SEO title="archive" location={location} url="/archive" />
      <section className={styles.archivePage}>
        <Search query={query} />
      </section>
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
