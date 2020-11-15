import React from "react"
import HeaderTop from "./header-top"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <HeaderTop />
      </header>
      <main className="global-main">{children}</main>
    </div>
  )
}

export default Layout
