import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import * as styles from "~/styles/components/HeaderBlogPost.module.css"
import HeaderTop from "./HeaderTop"

export type Props = {
  fluid?: IGatsbyImageData
}

const HeaderBlogPost = ({ fluid }: Props) => {
  if (!fluid) {
    return <HeaderTop />
  }

  return (
    <GatsbyImage
      image={fluid}
      className={styles.blogPostHeaderImage}
      alt="header"
    />
  )
}

export default HeaderBlogPost
