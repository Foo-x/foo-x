import React from "react"
import BrandIcon from "./brand-icon"
import Menu from "./menu"

import styles from "styles/components/nav.module.css"

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
