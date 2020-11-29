import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderTop from "../components/header-top"
import ThumbnailRaster from "../components/thumbnail-raster"
import ThumbnailVector from "../components/thumbnail-vector"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} header={<HeaderTop />}>
      <SEO title="All posts" location={location} />
      <ul className="post-list" style={{ listStyle: `none`, padding: 0 }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const imgSrc = post.frontmatter.thumbnail?.childImageSharp?.fluid
          const thumbnail = imgSrc ? (
            <ThumbnailRaster img={imgSrc} />
          ) : (
            <ThumbnailVector
              img={post.frontmatter.thumbnail?.publicURL || "/favicon.svg"}
            />
          )

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <Link to={`/blog${post.fields.slug}`} itemProp="url">
                  <div className="post-list-item-image-wrapper">
                    {thumbnail}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
            publicURL
          }
        }
      }
    }
  }
`
