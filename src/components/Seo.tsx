import { graphql, useStaticQuery } from "gatsby"
import { PropsWithChildren } from "react"
import * as styles from "~/styles/components/Seo.module.css"

export type Props = PropsWithChildren<{
  description?: string
  lang?: string
  title: string
  url: string
  imageURL?: string
  location: {
    pathname: string
  }
}>

const Seo = ({
  description = "",
  lang,
  title,
  url,
  imageURL,
  location,
  children,
}: Props) => {
  const { site, defaultImage } = useStaticQuery(
    graphql`
      query Seo {
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
    <>
      <html lang={lang} />
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta
        name="og:image"
        content={
          site.siteMetadata.siteUrl + (imageURL || defaultImage.publicURL)
        }
      />
      <meta name="og:url" content={site.siteMetadata.siteUrl + url} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <body className={bodyClass} />
      {children}
    </>
  )
}

export default Seo
