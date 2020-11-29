import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useRef, useState } from "react"

const touchmoveListener = event => {
  event.preventDefault()
}
const wheelListener = event => {
  event.preventDefault()
}
const keydownListener = event => {
  if (["ArrowUp", "ArrowDown"].includes(event.key)) {
    event.preventDefault()
  }
}

const Menu = () => {
  const data = useStaticQuery(
    graphql`
      query {
        home: file(
          sourceInstanceName: { eq: "assets" }
          relativePath: { eq: "home.svg" }
        ) {
          publicURL
        }
        archive: file(
          sourceInstanceName: { eq: "assets" }
          relativePath: { eq: "archive.svg" }
        ) {
          publicURL
        }
        about: file(
          sourceInstanceName: { eq: "assets" }
          relativePath: { eq: "about.svg" }
        ) {
          publicURL
        }
      }
    `
  )

  const [isActive, setIsActive] = useState(false)
  const hamburgerClassNames = isActive ? ["hamburger", "active"] : ["hamburger"]
  const navClassNames = isActive ? ["menu-nav"] : ["menu-nav", "is-hidden"]

  const target = useRef(null)

  useEffect(() => {
    if (isActive) {
      target.current.addEventListener("touchmove", touchmoveListener, {
        passive: false,
      })
      target.current.addEventListener("wheel", wheelListener, {
        passive: false,
      })
      document.addEventListener("keydown", keydownListener)
    } else {
      target.current.removeEventListener("touchmove", touchmoveListener, {
        passive: false,
      })
      target.current.removeEventListener("wheel", wheelListener, {
        passive: false,
      })
      document.removeEventListener("keydown", keydownListener)
    }
  }, [isActive])

  return (
    <div className="menu-wrapper">
      <nav className={navClassNames.join(" ")} ref={target}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                setIsActive(false)
              }}
            >
              <img src={data.home.publicURL} alt="home" />
            </Link>
          </li>
          <li>
            <Link
              to="/archive"
              onClick={() => {
                setIsActive(false)
              }}
            >
              <img src={data.archive.publicURL} alt="archive" />
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => {
                setIsActive(false)
              }}
            >
              <img src={data.about.publicURL} alt="about" />
            </Link>
          </li>
        </ul>
      </nav>
      {/*
      Copyright (c) 2020 by Mikael Ainalem (https://codepen.io/ainalem/pen/LJYRxz)

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      */}
      <svg
        className={hamburgerClassNames.join(" ")}
        viewBox="0 0 100 100"
        width="32"
        onClick={() => {
          setIsActive(!isActive)
        }}
      >
        <path
          className="line top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
        />
        <path className="line middle" d="m 30,50 h 40" />
        <path
          className="line bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
        />
      </svg>
    </div>
  )
}

export default Menu
