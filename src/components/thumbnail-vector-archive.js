import React, { useState } from "react"

import styles from "styles/components/thumbnail-vector-archive.module.css"

const ThumbnailVectorArchive = ({ img }) => {
  const [isHidden, setIsHidden] = useState(true)

  const className = styles.thumbnailVectorArchive
  const classNames = isHidden ? [className, "is-hidden"] : [className]

  return (
    <div className={styles.thumbnailVectorArchiveSpace}>
      <img
        src={img}
        className={classNames.join(" ")}
        alt="thumbnail"
        itemProp="image"
        onLoad={() => setIsHidden(false)}
      />
    </div>
  )
}

export default ThumbnailVectorArchive
