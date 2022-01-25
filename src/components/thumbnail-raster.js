import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "styles/components/thumbnail-raster.module.css"

const ThumbnailRaster = ({ img }) => {
  return (
    <GatsbyImage
      image={{ ...img, aspectRatio: 1 }}
      className={styles.thumbnailRaster}
      alt="thumbnail"
      itemProp="image"
    />
  )
}

export default ThumbnailRaster
