import React from "react"
import { Link } from "gatsby"

const BrandIcon = () => {
  return (
    <Link to="/">
      <img className="brand-icon" src="/favicon.svg" alt="brand icon" />
    </Link>
  )
}

export default BrandIcon
