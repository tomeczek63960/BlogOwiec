import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Montserrat-Bold.woff2"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Montserrat-Bold"
    />,
    <link
      rel="preload"
      href="/fonts/Montserrat-Medium.woff2"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Montserrat-Medium"
    />,
    <link
      rel="preload"
      href="/fonts/Montserrat-Regular.woff2"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Montserrat-Regular"
    />,
    <link
      rel="preload"
      href="/fonts/Poppins-Bold.woff"
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
      key="Poppins-Bold"
    />,
 
  ])
}