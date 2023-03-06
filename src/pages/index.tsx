import { graphql, HeadProps, Link, PageProps } from "gatsby"
import * as styles from "~/styles/pages/index.module.css"
import HeaderTop from "../components/HeaderTop"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ThumbnailVector from "../components/ThumbnailVector"

const BlogIndex = ({ data, location }: PageProps<Queries.IndexPageQuery>) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} header={<HeaderTop />}>
      <ul className={styles.postList} style={{ listStyle: `none`, padding: 0 }}>
        {posts.map(post => {
          const title = post?.frontmatter?.title || post.fields?.slug

          return (
            <li key={post.fields?.slug}>
              <article
                className={styles.postListItem}
                itemScope
                itemType="http://schema.org/Article"
              >
                <Link to={post.fields?.slug!} itemProp="url">
                  <div className={styles.postListItemImageWrapper}>
                    <ThumbnailVector
                      img={
                        post.frontmatter?.thumbnail?.publicURL || "/favicon.svg"
                      }
                    />
                  </div>
                  <section>
                    <h2>
                      <span itemProp="headline">{title}</span>
                    </h2>
                  </section>
                </Link>
              </article>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          thumbnail {
            publicURL
          }
        }
      }
    }
  }
`

export const Head = ({ location }: HeadProps) => {
  return <Seo title="All posts" location={location} url="/" />
}
