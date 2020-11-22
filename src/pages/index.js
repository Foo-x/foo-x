import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const defaultImg = data.defaultImg.childImageSharp.fluid

  return (
    <Layout location={location}>
      <SEO title="All posts" location={location} />
      <ul className="post-list" style={{ listStyle: `none`, padding: 0 }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const img =
            post.frontmatter.thumbnail?.childImageSharp?.fluid || defaultImg

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <Link to={post.fields.slug} itemProp="url">
                  <Img
                    fluid={{ ...img, aspectRatio: 1 }}
                    alt="thumbnail"
                    itemProp="image"
                  />
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
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
          description
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 500, grayscale: true) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      }
    }
    defaultImg: file(
      absolutePath: { regex: "//content/assets/default-img.png/" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
