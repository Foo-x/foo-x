import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"
import * as styles from "styles/components/seo.module.css"

const SEO = ({ description, lang, meta, title, url, imageURL, location }) => {
  const { site, defaultImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
        defaultImage: file(
          sourceInstanceName: { eq: "assets" }
          relativePath: { eq: "default-ogp.png" }
        ) {
          publicURL
        }
      }
    `
  )

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const archivePath = `${__PATH_PREFIX__}/archive`
  const isArchivePath = location.pathname === archivePath
  const bodyClass =
    isRootPath || isArchivePath ? styles.bodyTop : styles.bodyBlogPost

  const metaDescription = description || site.siteMetadata.description
  const pageTitle =
    url === "/"
      ? site.siteMetadata.title
      : `${title} | ${site.siteMetadata.title}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      link={[
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ]}
      bodyAttributes={{
        class: bodyClass,
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content:
            site.siteMetadata.siteUrl + (imageURL || defaultImage.publicURL),
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl + url,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
      ].concat(meta)}
    ></Helmet>
  )
}

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
