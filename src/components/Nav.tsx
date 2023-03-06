import * as styles from "~/styles/components/Nav.module.css"
import BrandIcon from "./BrandIcon"
import Menu from "./Menu"

export type Props = {
  isHidden: boolean
  className: string
}

const Nav = ({ isHidden, className }: Props) => {
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
