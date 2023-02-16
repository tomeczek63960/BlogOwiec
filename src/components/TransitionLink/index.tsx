import React from "react"
import { useI18next } from 'gatsby-plugin-react-i18next'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useLocation } from '@reach/router'
import { transitionLinkActive } from "./style.module.scss"
import { TTransitionLinkProps } from "../../types"

const TransitionLink: React.FC<TTransitionLinkProps> = ({children, direction, activeClassName, className, url, click}) => {
  const {language, defaultLanguage} = useI18next()
  const {pathname} = useLocation()
  const path = `${language !== defaultLanguage ? `/${language}` : ''}${url}`
  return <AniLink
      to={path}
      bg="#252f3f"
      cover
      direction={direction}
      className={`${className} ${(pathname === `${path}/` || pathname === path) ? `${transitionLinkActive} ${activeClassName}` : ''}`}
      onClick={click}
      disabled
    >
      {children}
  </AniLink>
    
}

export default TransitionLink