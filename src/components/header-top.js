import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "styles/components/header-top.module.css"

const HeaderTop = () => {
  const { brand } = useStaticQuery(
    graphql`
      query {
        brand: file(absolutePath: { regex: "/brand.svg/" }) {
          publicURL
        }
      }
    `
  )

  return (
    <h1 className={styles.headerTop}>
      <img className={styles.headerBrand} src={brand.publicURL} alt="foo-x" />
    </h1>
  )
}

export default HeaderTop
