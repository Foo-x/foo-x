import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "styles/components/header-blog-post.module.css"
import HeaderTop from "./header-top"

const HeaderBlogPost = ({ fluid }) => {
  if (!fluid) {
    return <HeaderTop />
  }

  return (
    <GatsbyImage
      image={fluid}
      className={styles.blogPostHeaderImage}
      alt="header"
    />
  )
}

export default HeaderBlogPost
