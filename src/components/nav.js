import React from "react"
import BrandIcon from "./brand-icon"

const Nav = ({ isHidden }) => {
  const classNames = isHidden ? ["global-nav", "is-hidden"] : ["global-nav"]
  return (
    <nav className={classNames.join(" ")}>
      <BrandIcon />
    </nav>
  )
}

export default Nav
