import * as React from "react"
import { banner } from "@style/components/banner.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { container } from "@style/components/container.module.scss"

const Banner: React.FC = ({content}: any) => {
  const image = getImage(content.image)
  return (
    <section className={banner}>
      <div className={container}>
        <GatsbyImage image={image} alt="banner iamge" />
      </div>
    </section>
  )
}

export default Banner