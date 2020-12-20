import React from "react"
import HeaderCommon from "./header-common"
import Nav from "./nav"

import styles from "styles/components/layout-common.module.css"

const LayoutCommon = ({ children, titleSvg, mainClassName }) => {
  return (
    <div className="global-wrapper">
      <header className={styles.globalHeaderCommon}>
        <HeaderCommon titleSvg={titleSvg} />
      </header>
      <Nav isHidden={false} className="global-nav-wrapper" />
      <main className={mainClassName}>{children}</main>
    </div>
  )
}

export default LayoutCommon
