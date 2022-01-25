import React from "react"
import * as styles from "styles/components/nav.module.css"
import BrandIcon from "./brand-icon"
import Menu from "./menu"

const Nav = ({ isHidden, className }) => {
  const classNames = isHidden ? [className, "is-hidden"] : [className]
  return (
    <nav className={classNames.join(" ")}>
      <div className={styles.globalNav}>
        <BrandIcon />
        <Menu />
      </div>
    </nav>
  )
}

export default Nav
