import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { logo } from "./style.module.scss"
import TransitionLink from "@components/TransitionLink"

const Logo = () => {
  return (
    <TransitionLink
      direction="left"
      url="/"
      className={logo}
    >
      <span>BLOG</span><span className="red">OWIEC</span>
      <StaticImage
        src="../../images/logo.png"
        alt="A dinosaur"
        placeholder="blurred"
        layout="constrained"
        width={50}
      />
    </TransitionLink>
  )
}

export default Logo
