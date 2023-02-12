import React, { useEffect, useState } from "react"
import Logo from "@components/Logo"
import { container } from "@style/components/container.module.scss"
import { header, nav, navList, navListActive, navLink, navLinkActive, bars, bars__line, barsActive } from "@style/components/header.module.scss"
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

const Header = (props: any) => {
  const [isNavActive, setNavActive] = useState(false)
  const {languages, language, changeLanguage} = useI18next();
  const nodes = props?.nav?.nodes
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
          {nodes?.map((item: any) => <li key={item.id}>
          <Link
            to={item.url}
            activeClassName={navLinkActive}
            className={navLink}
          >
            {item.title}
          </Link>
          </li>)}

          {languages.map((lng) => language !== lng && (
            <li key={lng}>
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  changeLanguage(lng);
                }}>
                {lng}
              </Link>
              {/* <Link to="/" language={lng} className={navLink}>
                {lng}
              </Link> */}
            </li>
          ))}
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