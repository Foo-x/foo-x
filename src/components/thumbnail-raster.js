import React from "react"
import Img from "gatsby-image"

import styles from "styles/components/thumbnail-raster.module.css"

const ThumbnailRaster = ({ img }) => {
  return (
    <Img
      className={styles.thumbnailRaster}
      fluid={{ ...img, aspectRatio: 1 }}
      alt="thumbnail"
      itemProp="image"
    />
  )
}

export default ThumbnailRaster
