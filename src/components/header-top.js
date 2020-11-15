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
    <header className="global-header">
      <h1 className="header-heading">
        <Link to="/">
          <img className="header-brand" src={brand.publicURL} alt="foo-x.com" />
        </Link>
      </h1>
    </header>
  )
}

export default HeaderTop
