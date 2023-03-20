import { graphql, HeadProps, Link, PageProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "~/styles/pages/404.module.css"
import LayoutCommon from "../components/LayoutCommon"
import Seo from "../components/Seo"

const NotFoundPage = ({ data }: PageProps<Queries.NotFoundPageQuery>) => {
  return (
    <LayoutCommon titleSvg={data.notFound?.publicURL ?? ""}>
      <article
        className={styles.notFoundPage}
        itemScope
        itemType="http://schema.org/Article"
      >
        <GatsbyImage
          image={data.sleepingCat?.childImageSharp?.gatsbyImageData!}
          alt="sleeping-cat"
        />
        <section itemProp="articleBody">
          <Link to="/">トップへ</Link>
        </section>
      </article>
    </LayoutCommon>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPage {
    notFound: file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "404.svg" }
    ) {
      publicURL
    }
    sleepingCat: file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "sleeping-cat.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(formats: [WEBP], placeholder: NONE, layout: CONSTRAINED)
      }
    }
  }
`

export const Head = ({ location }: HeadProps) => {
  return <Seo title="404" location={location} url="/" />
}