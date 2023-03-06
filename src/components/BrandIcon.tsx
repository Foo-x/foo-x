import { Link } from "gatsby"
import * as styles from "~/styles/components/BrandIcon.module.css"

const BrandIcon = () => {
  return (
    <Link to="/">
      <img className={styles.brandIcon} src="/favicon.svg" alt="brand icon" />
    </Link>
  )
}

export default BrandIcon
