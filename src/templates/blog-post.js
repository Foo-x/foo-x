import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderBlogPost from "../components/header-blog-post"
import ShareFooter from "../components/share-footer"
import styles from "styles/templates/blog-post.module.css"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const toc = post.tableOfContents.replace(/<\/?p>/g, "")

  return (
    <Layout
      location={location}
      header={
        <HeaderBlogPost
          fluid={post.frontmatter.header?.childImageSharp?.fluid}
        />
      }
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        location={location}
        imageURL={post.frontmatter.ogp?.publicURL}
        url={post.fields.slug}
      />
      <article
        className={styles.blogPost}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <time dateTime={post.frontmatter.date}>
            {post.frontmatter.date.replace(/-/g, ".")}
          </time>
          <ul className={styles.blogPostTagList}>
            {post.frontmatter.tags?.map(tag => {
              return (
                <li key={tag}>
                  <Link to={`/archive?tag=${tag}`}>{tag}</Link>
                </li>
              )
            }) || ""}
          </ul>
          <nav>
            <header>目次</header>
            <hr />
            <section dangerouslySetInnerHTML={{ __html: toc }}></section>
            <hr />
          </nav>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <ShareFooter url={location.href} title={post.frontmatter.title} />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        header {
          childImageSharp {
            fluid(maxWidth: 1920, toFormat: WEBP) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        ogp {
          publicURL
        }
        tags
      }
      tableOfContents(maxDepth: 3)
    }
  }
`
