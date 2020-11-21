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
      <SEO title="All posts" />
      <ul className="post-list" style={{ listStyle: `none`, padding: 0 }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <Link to={post.fields.slug} itemProp="url">
                  <Img
                    fluid={defaultImg}
                    alt="default image"
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
