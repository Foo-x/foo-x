import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  FacebookIcon,
  FacebookShareButton,
  HatenaIcon,
  HatenaShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share"

import styles from "styles/components/share-footer.module.css"

const ShareFooter = ({ url, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const pageTitle = `${title} | ${site.siteMetadata.title}`
  const size = 32

  return (
    <footer className={styles.shareFooter}>
      <TwitterShareButton url={url} title={pageTitle}>
        <TwitterIcon size={size} />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={pageTitle}>
        <FacebookIcon size={size} />
      </FacebookShareButton>
      <HatenaShareButton url={url} title={pageTitle}>
        <HatenaIcon size={size} />
      </HatenaShareButton>
    </footer>
  )
}

export default ShareFooter
