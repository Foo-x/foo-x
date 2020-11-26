import React from "react"
import BrandIcon from "./brand-icon"

const Nav = ({ isHidden, className }) => {
  const classNames = isHidden ? [className, "is-hidden"] : [className]
  return (
    <nav className={classNames.join(" ")}>
      <BrandIcon />
    </nav>
  )
}

export default Nav
