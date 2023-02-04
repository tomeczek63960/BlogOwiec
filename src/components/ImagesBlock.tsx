import * as React from "react"
import { imagesBlock, imagesBlock__content } from '@style/components/images-block.module.scss';
import { StaticImage } from "gatsby-plugin-image"
import { container } from '@style/components/container.module.scss';

const ImagesBlock: React.FC = () => {
  return (
    <section className={imagesBlock}>
      <div className={container}>
        <div className={imagesBlock__content}>
            <StaticImage
              src="../images/banner.jpg"
              alt="A dinosaur"
              placeholder="blurred"
            />
            <StaticImage
              src="../images/banner.jpg"
              alt="A dinosaur"
              placeholder="blurred"
            />
            <StaticImage
              src="../images/banner.jpg"
              alt="A dinosaur"
              placeholder="blurred"
            />
        </div>
      </div>
    </section>
  )
}

export default ImagesBlock;