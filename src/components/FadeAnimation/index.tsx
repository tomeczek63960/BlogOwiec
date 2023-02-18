import * as React from "react"
import { gsap } from "gsap"
import { fadeAnimation, fadeAnimationOpacity } from "./style.module.scss"
import type { TFadeAnimationProps } from "./types"

const FadeAnimation: React.FC<TFadeAnimationProps> = ({children, onlyFade, critical}) => {
  const triggerRef = React.useRef<HTMLDivElement>(null)
  // TODO: update options type
  React.useEffect(() => {
    const options: any = {
      duration: 0.7,
      ease: "ease",
      opacity: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: () =>
          `top ${
            window.innerHeight * 0.55
          }`,
      }
    }
    if (!onlyFade) {
      options.y = 0
    }
    gsap.to(triggerRef.current, options)
  }, [])
  return (
    <div className={`${!critical && fadeAnimation} ${(onlyFade) && fadeAnimationOpacity}`} ref={!critical ? triggerRef : null}>
      {children}
    </div>
  )
}

export default FadeAnimation