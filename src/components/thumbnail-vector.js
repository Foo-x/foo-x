import React, { useEffect, useState } from "react"
import * as styles from "styles/components/thumbnail-vector.module.css"

const ThumbnailVector = ({ img }) => {
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    setIsHidden(false)
  }, [])

  const className = styles.thumbnailVector
  const classNames = isHidden ? [className, "is-hidden"] : [className]

  return (
    <div className={styles.thumbnailVectorSpace}>
      <img
        src={img}
        className={classNames.join(" ")}
        alt="thumbnail"
        itemProp="image"
        loading="lazy"
      />
    </div>
  )
}

export default ThumbnailVector
