import React from "react"
import Header from "@components/Header"
import Footer from "@components/Footer"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
interface Props {
  children: React.ReactNode;
  nav: any;
  footer: any
}

const Layout: React.FC<Props> = ({children, footer, nav}) => {
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
