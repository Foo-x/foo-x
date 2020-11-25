import React from "react"
import Img from "gatsby-image"

const ThumbnailRaster = ({ img }) => {
  return (
    <Img fluid={{ ...img, aspectRatio: 1 }} alt="thumbnail" itemProp="image" />
  )
}

export default ThumbnailRaster
