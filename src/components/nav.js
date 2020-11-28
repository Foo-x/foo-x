import React from "react"
import BrandIcon from "./brand-icon"
import Menu from "./menu"

const Nav = ({ isHidden, className }) => {
  const classNames = isHidden ? [className, "is-hidden"] : [className]
  return (
    <nav className={classNames.join(" ")}>
      <div className="global-nav">
        <BrandIcon />
        <Menu />
      </div>
    </nav>
  )
}

export default Nav
