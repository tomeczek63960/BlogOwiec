import * as React from "react"
import { banner } from '@style/components/banner.module.scss';
import { StaticImage } from "gatsby-plugin-image"

const Banner: React.FC = () => {
  return (
    <section className={banner}>
      <StaticImage
        src="../images/banner.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={200}
        height={200}
      />
    </section>
  )
}

export default Banner;