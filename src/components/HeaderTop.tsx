import { graphql, useStaticQuery } from "gatsby"
import * as styles from "~/styles/components/HeaderTop.module.css"

const HeaderTop = () => {
  const { brand } = useStaticQuery(
    graphql`
      query HeaderTop {
        brand: file(absolutePath: { regex: "/brand.svg/" }) {
          publicURL
        }
      }
    `
  )

  return (
    <h1 className={styles.headerTop}>
      <img className={styles.headerBrand} src={brand.publicURL} alt="foo-x" />
    </h1>
  )
}

export default HeaderTop
