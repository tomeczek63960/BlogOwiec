import * as React from "react"
import { banner } from "./style.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { container } from "@style/container.module.scss"
import type { TPropsBanner } from "../../../types"

const Banner: React.FC<TPropsBanner> = ({content}) => {
  const image = getImage(content.image)
  return (
    <section className={banner}>
      <div className={container}>
        {image && <GatsbyImage image={image} alt="banner iamge" />}
      </div>
    </section>
  )
}

export default Banner