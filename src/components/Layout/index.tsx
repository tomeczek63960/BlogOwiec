import React from "react"
import Header from "@components/Header"
import Footer from "@components/Footer"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { TLayoutProps } from "./types"

const Layout: React.FC<TLayoutProps> = ({children, footer, nav}) => {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <>
      <Header nav={nav} />
      <main>
        {children}
      </main>
      <Footer footer={footer} />
    </>
  )
}

export default Layout
