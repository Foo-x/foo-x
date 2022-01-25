import React from "react"
import * as styles from "styles/components/header-common.module.css"

const HeaderCommon = ({ titleSvg }) => {
  return (
    <img className={styles.headingCommon} src={titleSvg} alt="heading title" />
  )
}

export default HeaderCommon
