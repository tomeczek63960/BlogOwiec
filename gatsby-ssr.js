import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link rel="preconnect" href="https://fonts.googleapis.com" />,
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />,
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Oriya:wght@400;500;600;700&family=Poppins:wght@700&display=swap" rel="stylesheet" />,
  ])
}