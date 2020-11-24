import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderBlogPost from "../components/header-blog-post"
import ShareFooter from "../components/share-footer"

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
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <time dateTime={post.frontmatter.date}>
            {post.frontmatter.date.replace(/-/g, ".")}
          </time>
          <section className="blog-post-tag-list">
            {post.frontmatter.tags?.join(" / ") || ""}
          </section>
          <nav>
            <header>目次</header>
            <section dangerouslySetInnerHTML={{ __html: toc }}></section>
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
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        header {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        tags
      }
      tableOfContents(maxDepth: 3)
    }
  }
`
