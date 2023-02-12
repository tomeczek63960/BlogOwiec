import React from "react"
import { useI18next } from 'gatsby-plugin-react-i18next';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useLocation } from '@reach/router';
import { transitionLinkActive } from "@style/components/transition-link.module.scss"

const TransitionLink = ({children, direction, activeClassName, className, url, click}: any) => {
  const {language, defaultLanguage} = useI18next();
  const {pathname} = useLocation();
  const path = `${language !== defaultLanguage ? `/${language}` : ''}${url}`;
  console.log(pathname, `${path}/`)
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