import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const HeaderTop = () => {
  const { brand } = useStaticQuery(
    graphql`
      query {
        brand: file(absolutePath: { regex: "/brand.svg/" }) {
          publicURL
        }
      }
    `
  )

  return (
    <h1 className="header-top">
      <Link to="/">
        <img className="header-brand" src={brand.publicURL} alt="foo-x.com" />
      </Link>
    </h1>
  )
}

export default HeaderTop
