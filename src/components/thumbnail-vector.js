import React, { useRef, useState } from "react"

const ThumbnailVector = ({ img }) => {
  const [isHidden, setIsHidden] = useState(true)
  const target = useRef(null)
  if (target.current?.complete && isHidden) {
    setIsHidden(false)
  }

  const className = "thumbnail-vector"
  const classNames = isHidden ? [className, "is-hidden"] : [className]

  return (
    <div className="thumbnail-vector-space">
      <img
        ref={target}
        src={img}
        className={classNames.join(" ")}
        alt="thumbnail"
        itemProp="image"
        loading="lazy"
        onLoad={() => setIsHidden(false)}
      />
    </div>
  )
}

export default ThumbnailVector
