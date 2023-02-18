import * as React from "react"
import { parallax, parallax__image, parallax__content, parallax__picture } from "./style.module.scss"
import { container } from "@style/container.module.scss"
import { TParallaxProps } from "./types"
import { gsap } from "gsap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const isWindowDefined = typeof window !== undefined
const Parallax: React.FC<TParallaxProps> = ({content}) => {
  const parallaxRef = React.useRef<any>(); // TODO: Update type
  const parallaxImage = React.useRef<HTMLDivElement>(null);
  const parallaxSection = React.useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = React.useState<number>(0)
  const updateWindowSize = () => {
    gsap.set(parallaxImage?.current, { transform: '' })
    parallaxRef.current?.kill()
    parallaxRef.current = null
    setWindowWidth(window.innerWidth)
  }
  React.useEffect(() => {
    let parallaxTranslate = (windowWidth || (isWindowDefined ? window.innerWidth : 0)) < 768 ? 100 : 300
    parallaxRef.current = gsap.to(parallaxImage.current, {
      y: `-=${parallaxTranslate}`,
      scrollTrigger: {
        trigger: parallaxSection.current,
        start: 'top bottom',
        end: 'bottom 0',
        scrub: 0.1
      }
    })
  },[windowWidth])
  React.useEffect(() => {
    if (isWindowDefined) {
      window.addEventListener('resize', updateWindowSize)
    }
    return () => {
      if (isWindowDefined) {
        window.removeEventListener('resize', updateWindowSize)
      }
    }
  }, [])
  
  const image = getImage(content?.image)
  return (
    <section className={parallax}>
      <div className={container}>
          <div
            className={parallax__content}
            ref={parallaxSection}
            >
            <div
              className={parallax__image} ref={parallaxImage}
              >
                {image && <GatsbyImage className={parallax__picture} image={image} alt="banner iamge" />}
            </div>
          </div>
      </div>
    </section>
  )
}

export default Parallax