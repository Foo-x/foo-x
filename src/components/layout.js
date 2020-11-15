import React, { useEffect, useRef, useState } from "react"
import HeaderTop from "./header-top"
import Nav from "./nav"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const target = useRef(null)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    const callback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsHidden(true)
        } else {
          setIsHidden(false)
        }
      })
    }
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(target.current)
  }, [])
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header ref={target} className="global-header">
        <HeaderTop />
      </header>
      <Nav isHidden={isHidden} />
      <main className="global-main">{children}</main>
    </div>
  )
}

export default Layout
