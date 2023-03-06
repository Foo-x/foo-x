import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import * as styles from "~/styles/components/ThumbnailRaster.module.css"

export type Props = {
  img: IGatsbyImageData
}

const ThumbnailRaster = ({ img }: Props) => {
  return (
    <GatsbyImage
      image={{ ...img }}
      className={styles.thumbnailRaster}
      alt="thumbnail"
      itemProp="image"
    />
  )
}

export default ThumbnailRaster
