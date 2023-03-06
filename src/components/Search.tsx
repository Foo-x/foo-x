import { graphql, Link, useStaticQuery } from "gatsby"
import { useState } from "react"
import * as styles from "~/styles/components/Search.module.css"
import ThumbnailRaster from "./ThumbnailRaster"
import ThumbnailVectorArchive from "./ThumbnailVectorArchive"

export type Props = {
  query: URLSearchParams
}

const Search = ({ query }: Props) => {
  const data = useStaticQuery<Queries.SearchQuery>(
    graphql`
      query Search {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              header {
                childImageSharp {
                  gatsbyImageData(
                    aspectRatio: 1
                    formats: [WEBP]
                    placeholder: NONE
                    layout: CONSTRAINED
                  )
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
  const tagPattern = new RegExp(tag, "i")

  const results = data.allMarkdownRemark.nodes.filter(node => {
    const nodeTags =
      node.frontmatter?.tags?.filter((tag): tag is string => tag != null) ?? []
    if (tag && nodeTags.every(nodeTag => !tagPattern.test(nodeTag))) {
      return false
    }

    return true
  })

  return (
    <div>
      <section className={styles.searchArea}>
        <label>
          <h2 className={styles.searchAreaLabelTag}>タグ</h2>
          <div className={styles.searchAreaInput}>
            <input
              type="text"
              value={tag}
              onChange={event => {
                setTag(event.target.value)
              }}
            />
            <img
              className={styles.searchButton}
              src={data.file?.publicURL ?? undefined}
              alt="search"
            />
          </div>
        </label>
      </section>
      <ul
        className={styles.searchResultList}
        style={{ listStyle: `none`, padding: 0 }}
      >
        {results.map(result => {
          const title = result.frontmatter?.title || result.fields?.slug
          const imgSrc =
            result.frontmatter?.header?.childImageSharp?.gatsbyImageData
          const thumbnail = imgSrc ? (
            <ThumbnailRaster img={imgSrc} />
          ) : (
            <ThumbnailVectorArchive img={"/favicon.svg"} />
          )
          const tags = result.frontmatter?.tags
            ? result.frontmatter?.tags.map(tag => {
                return <li key={tag}>{tag}</li>
              })
            : null

          return (
            <li key={result.fields?.slug}>
              <article
                className={styles.searchResultItem}
                itemScope
                itemType="http://schema.org/Article"
              >
                <Link to={result.fields?.slug!} itemProp="url">
                  <div className={styles.searchResultImageWrapper}>
                    {thumbnail}
                  </div>
                  <section>
                    <h2
                      className={styles.searchResultItemTitle}
                      itemProp="headline"
                    >
                      {title}
                    </h2>
                    <time dateTime={result.frontmatter?.date ?? undefined}>
                      {result.frontmatter?.date?.replace(/-/g, ".")}
                    </time>
                    <ul className={styles.searchResultTagList}>{tags}</ul>
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
