import React, { useState } from "react"

const ThumbnailVectorArchive = ({ img }) => {
  const [isHidden, setIsHidden] = useState(true)

  const className = "thumbnail-vector-archive"
  const classNames = isHidden ? [className, "is-hidden"] : [className]

  return (
    <div className="thumbnail-vector-archive-space">
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
