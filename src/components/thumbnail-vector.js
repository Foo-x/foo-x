import React, { useState } from "react"

const ThumbnailVector = ({ img }) => {
  const [isHidden, setIsHidden] = useState(true)

  const className = "post-list-item-image-vector"
  const classNames = isHidden ? [className, "is-hidden"] : [className]

  return (
    <div className="post-list-item-image-space">
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

export default ThumbnailVector
