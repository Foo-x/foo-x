import React from "react"
import HeaderTop from "./header-top"
import BrandIcon from "./brand-icon"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <HeaderTop />
      </header>
      <nav className="global-nav">
        <BrandIcon />
      </nav>
      <main className="global-main">{children}</main>
    </div>
  )
}

export default Layout
