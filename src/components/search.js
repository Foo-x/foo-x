import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import ThumbnailRaster from "./thumbnail-raster"
import ThumbnailVectorArchive from "./thumbnail-vector-archive"

/**
 * @param {object} param0
 * @param {URLSearchParams} param0.query
 */
const Search = ({ query }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              header {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
              tags
            }
          }
        }
        file(
          sourceInstanceName: { eq: "assets" }
          relativePath: { eq: "search.svg" }
        ) {
          publicURL
        }
      }
    `
  )

  const queryTag = query.get("tag")
  const [tag, setTag] = useState(queryTag || "")

  const results = data.allMarkdownRemark.nodes.filter(node => {
    const nodeTags = node.frontmatter.tags || []
    if (tag && nodeTags.every(nodeTag => !nodeTag.includes(tag))) {
      return false
    }

    return true
  })

  return (
    <div>
      <section className="search-area">
        <label>
          <h2 className="search-area-label-tag">タグ</h2>
          <div className="search-area-input">
            <input
              type="text"
              value={tag}
              onChange={event => {
                setTag(event.target.value)
              }}
            />
            <img
              className="search-button"
              src={data.file.publicURL}
              alt="search"
            />
          </div>
        </label>
      </section>
      <ul
        className="search-result-list"
        style={{ listStyle: `none`, padding: 0 }}
      >
        {results.map(result => {
          const title = result.frontmatter.title || result.fields.slug
          const imgSrc = result.frontmatter.header?.childImageSharp?.fluid
          const thumbnail = imgSrc ? (
            <ThumbnailRaster img={imgSrc} />
          ) : (
            <ThumbnailVectorArchive img={"/favicon.svg"} />
          )
          const tags = result.frontmatter.tags
            ? result.frontmatter.tags.map(tag => {
                return <li key={tag}>{tag}</li>
              })
            : null

          return (
            <li key={result.fields.slug}>
              <article
                className="search-result-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <Link to={`/blog${result.fields.slug}`} itemProp="url">
                  <div className="search-result-image-wrapper">{thumbnail}</div>
                  <section>
                    <h2
                      className="search-result-item-title"
                      itemProp="headline"
                    >
                      {title}
                    </h2>
                    <time dateTime={result.frontmatter.date}>
                      {result.frontmatter.date.replace(/-/g, ".")}
                    </time>
                    <ul className="search-result-tag-list">{tags}</ul>
                  </section>
                </Link>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Search
