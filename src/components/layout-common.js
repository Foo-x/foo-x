import React from "react"
import HeaderCommon from "./header-common"
import Nav from "./nav"

const LayoutCommon = ({ children, titleSvg, mainClassName }) => {
  return (
    <div className="global-wrapper">
      <header className="global-header-common">
        <HeaderCommon titleSvg={titleSvg} />
      </header>
      <Nav isHidden={false} className="global-nav-wrapper" />
      <main className={mainClassName}>{children}</main>
    </div>
  )
}

export default LayoutCommon
