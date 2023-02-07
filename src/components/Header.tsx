import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Logo from "@components/Logo"
import { container } from "@style/components/container.module.scss"
import { header, nav, navList, navListActive, navLink, bars, bars__line, barsActive } from "@style/components/header.module.scss"

const Header = () => {
  const [isNavActive, setNavActive] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      allContentfulNav {
        nodes {
          title
          url
          id
        }
      }
    }
  `)
  const { nodes } = data.allContentfulNav
  useEffect(() => {
    const html = document.querySelector("html")
    if (!html) return
    if (isNavActive) {
      html.style.overflow = "hidden"
      html.style.height = "100vh"
    } else {
      html.style.overflow = "auto"
      html.style.height = "auto"
    }
  }, [isNavActive])
  return <>
    <header className={header}>
      <nav className={`${container} ${nav}`}>
        <Logo />
        <ul
          className={`${navList} ${isNavActive ? navListActive: ""}`}
        >
          {nodes.map((item: any) => <li key={item.id}>
          <Link
            to={item.url}
            activeClassName="active"
            className={navLink}
          >
            {item.title}
          </Link>
          </li>)}
        </ul>
        <button
          className={`${bars}  ${isNavActive ? barsActive : ""}`}
          onClick={() => setNavActive(!isNavActive)}  
        >
          <span className={bars__line}></span>
        </button>
      </nav>
    </header>
  </>
}

export default Header