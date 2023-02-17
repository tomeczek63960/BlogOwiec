import * as React from "react"
import { parallax, parallax__image } from "./style.module.scss"
import { container } from "@style/container.module.scss"
import { TParallaxProps } from "./types"

const Parallax: React.FC<TParallaxProps> = ({content}) => {
  return (
    <section className={parallax}>
      <div className={container}>
          <div
            className={parallax__image}
            style={{backgroundImage: `url(${content?.image?.url})`}}
          ></div>
      </div>
    </section>
  )
}

export default Parallax