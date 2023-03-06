import { graphql } from "gatsby"
import React from "react"
import * as styles from "styles/pages/archive.module.css"
import LayoutCommon from "../components/layout-common"
import Search from "../components/search"
import Seo from "../components/seo"

const Archive = ({ data, location }) => {
  const query = new URLSearchParams(location.search)
  return (
    <LayoutCommon
      titleSvg={data.file.publicURL}
      mainClassName="global-main-archive"
    >
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

export const Head = ({ location }) => {
  return <Seo title="archive" location={location} url="/archive" />
}
