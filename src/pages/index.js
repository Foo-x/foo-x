import { graphql, Link } from "gatsby"
import React from "react"
import * as styles from "styles/pages/index.module.css"
import HeaderTop from "../components/header-top"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ThumbnailVector from "../components/thumbnail-vector"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} header={<HeaderTop />}>
      <ul className={styles.postList} style={{ listStyle: `none`, padding: 0 }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className={styles.postListItem}
                itemScope
                itemType="http://schema.org/Article"
              >
                <Link to={post.fields.slug} itemProp="url">
                  <div className={styles.postListItemImageWrapper}>
                    <ThumbnailVector
                      img={
                        post.frontmatter.thumbnail?.publicURL || "/favicon.svg"
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
  query {
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

export const Head = ({ location }) => {
  return <Seo title="All posts" location={location} url="/" />
}
