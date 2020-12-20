import React from "react"
import Img from "gatsby-image"

import HeaderTop from "./header-top"
import styles from "styles/components/header-blog-post.module.css"

const HeaderBlogPost = ({ fluid }) => {
  if (!fluid) {
    return <HeaderTop />
  }

  return (
    <Img className={styles.blogPostHeaderImage} fluid={fluid} alt="header" />
  )
}

export default HeaderBlogPost
