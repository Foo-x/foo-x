import React from "react"
import { Link } from "gatsby"

import styles from "styles/components/brand-icon.module.css"

const BrandIcon = () => {
  return (
    <Link to="/">
      <img className={styles.brandIcon} src="/favicon.svg" alt="brand icon" />
    </Link>
  )
}

export default BrandIcon
