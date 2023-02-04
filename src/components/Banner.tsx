import * as React from "react"
import { banner } from '@style/components/banner.module.scss';
import { StaticImage } from "gatsby-plugin-image"
import { container } from '@style/components/container.module.scss';

const Banner: React.FC = () => {
  return (
    <section className={banner}>
      <div className={container}>
        <StaticImage
          src="../images/banner.jpg"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>
    </section>
  )
}

export default Banner;