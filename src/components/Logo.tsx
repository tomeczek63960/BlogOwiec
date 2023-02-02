import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { logo } from '@style/components/logo.module.scss';

const Logo = () => {
  return (
    <>
      <Link to="/" className={logo}>
        <span>BLOG</span><span className="red">OWIEC</span>
        <StaticImage
          src="../images/logo.png"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fixed"
          height={45}
          // width={200}
        />
      </Link>
    </>
  )
}

export default Logo
