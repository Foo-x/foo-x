import React from "react"
import BrandIcon from "./brand-icon"

const Nav = ({ isHidden, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const navClassName = isRootPath ? "global-nav-top" : "global-nav"

  const classNames = isHidden ? [navClassName, "is-hidden"] : [navClassName]
  return (
    <nav className={classNames.join(" ")}>
      <BrandIcon />
    </nav>
  )
}

export default Nav
