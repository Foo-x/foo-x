import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react"
import * as styles from "~/styles/components/Layout.module.css"
import Nav from "./Nav"

export type Props = PropsWithChildren<{
  location: Window["location"]
  header: ReactNode
}>

const Layout = ({ location, children, header }: Props) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const mainClassName = isRootPath ? styles.globalMainTop : "global-main"
  const navClassName = isRootPath
    ? styles.globalNavWrapperTop
    : "global-nav-wrapper"

  const target = useRef<HTMLElement>(null)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    if (target.current == null) {
      return
    }
    const callback: IntersectionObserverCallback = entries => {
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
      <header className={styles.globalHeader}>{header}</header>
      <Nav isHidden={isHidden} className={navClassName} />
      <main ref={target} className={mainClassName}>
        {children}
      </main>
    </div>
  )
}

export default Layout
