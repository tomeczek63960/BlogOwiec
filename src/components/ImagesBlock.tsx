import * as React from "react"
import { imagesBlock, imagesBlock__content } from '@style/components/images-block.module.scss';
import { container } from '@style/components/container.module.scss';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImagesBlock: React.FC = ({content}: any) => {
  console.log(content);
  return (
    <section className={imagesBlock}>
      <div className={container}>
        <div className={imagesBlock__content}>
          {
            content.images.map((img: any, index: number) => <GatsbyImage key={`${img.id}${index}`} image={getImage(img)} alt="banner iamge" />)
          }
        </div>
      </div>
    </section>
  )
}

export default ImagesBlock;