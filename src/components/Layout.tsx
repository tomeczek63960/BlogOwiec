import React, { useEffect } from "react"
import Header from "@components/Header"
import Footer from "@components/Footer"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  gsap.registerPlugin(ScrollTrigger)
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
