import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title, location }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const archivePath = `${__PATH_PREFIX__}/archive`
  const isArchivePath = location.pathname === archivePath
  const bodyClass = isRootPath || isArchivePath ? "body-top" : "body-blog-post"

  const metaDescription = description || site.siteMetadata.description
  const pageTitle = isRootPath
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
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
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
