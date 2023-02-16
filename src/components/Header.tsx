import React, { useEffect, useState } from "react"
import Logo from "@components/Logo"
import { container } from "@style/components/container.module.scss"
import { header, nav, navList, header__wrapper, navListActive, navLink, navLinkActive, bars, bars__line, barsActive } from "@style/components/header.module.scss"
import { useI18next } from 'gatsby-plugin-react-i18next'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import TransitionLink from "@components/TransitionLink"
import type {TNav, TNavItem} from "../types"

const Header: React.FC<TNav> = (props) => {
  const [isNavActive, setNavActive] = useState(false)
  const {languages, language, changeLanguage, defaultLanguage} = useI18next()
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
  return <div className={header__wrapper}>
    <header className={header}>
      <nav className={`${container} ${nav}`}>
        <Logo />
        <ul
          className={`${navList} ${isNavActive ? navListActive: ""}`}
        >
        
        {nodes?.map((item: TNavItem) => <li key={item.id}>
          <TransitionLink
            direction="right"
            url={item.url}
            activeClassName={navLinkActive}
            className={navLink}
          >
            {item.title}
          </TransitionLink>
        </li>
        )}

          {languages.map((lng) => language !== lng && (
            <li key={lng}>
              <AniLink
                to="#"
                cover
                className={navLink}
                direction="right"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault()
                  changeLanguage(lng)
                }}>
                {lng}
              </AniLink>
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
  </div>
}

export default Header