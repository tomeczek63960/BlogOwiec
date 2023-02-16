import * as React from "react"
import { imagesBlock, imagesBlock__content } from "@style/components/images-block.module.scss"
import { container } from "@style/components/container.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import type {TImagesBlockProps, TImagesBlockItem} from "../types"

const ImagesBlock: React.FC<TImagesBlockProps> = ({content}) => {
  return (
    <section className={imagesBlock}>
      <div className={container}>
        <div className={imagesBlock__content}>
          {
            content.images.map((img: TImagesBlockItem, index: number) => {
              const image = getImage(img)
              return (
                image && <GatsbyImage key={`${img.id}${index}`} image={image} alt="banner iamge" />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ImagesBlock