import React, { useEffect, useRef, useState } from "react"
import Nav from "./nav"

const Layout = ({ location, children, header }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const mainClassName = isRootPath ? "global-main-top" : "global-main"
  const navClassName = isRootPath
    ? "global-nav-wrapper-top"
    : "global-nav-wrapper"

  const target = useRef(null)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    const callback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsHidden(false)
        } else {
          setIsHidden(true)
        }
      })
    }
    const options = {
      root: null,
      rootMargin: "0px 0px -100%",
      threshold: 0,
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(target.current)

    return () => {
      observer.disconnect()
    }
  }, [])
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <Nav isHidden={isHidden} className={navClassName} />
      <main ref={target} className={mainClassName}>
        {children}
      </main>
    </div>
  )
}

export default Layout
