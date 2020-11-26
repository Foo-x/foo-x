import React from "react"
import HeaderCommon from "./header-common"
import Nav from "./nav"

const LayoutCommon = ({ children, titleSvg }) => {
  return (
    <div className="global-wrapper">
      <header className="global-header-common">
        <HeaderCommon titleSvg={titleSvg} />
      </header>
      <Nav isHidden={false} className="global-nav-common" />
      <main className="global-main">{children}</main>
    </div>
  )
}

export default LayoutCommon
