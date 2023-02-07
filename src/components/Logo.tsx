import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { logo } from "@style/components/logo.module.scss"

const Logo = () => {
  return (
    <>
      <Link to="/" className={logo}>
        <span>BLOG</span><span className="red">OWIEC</span>
        <StaticImage
          src="../images/logo.png"
          alt="A dinosaur"
          placeholder="blurred"
          layout="constrained"
        />
      </Link>
    </>
  )
}

export default Logo
