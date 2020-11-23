import React from "react"
import Img from "gatsby-image"

import HeaderTop from "./header-top"

const HeaderBlogPost = ({ fluid }) => {
  if (!fluid) {
    return <HeaderTop />
  }

  return <Img className="blog-post-header-image" fluid={fluid} alt="header" />
}

export default HeaderBlogPost
