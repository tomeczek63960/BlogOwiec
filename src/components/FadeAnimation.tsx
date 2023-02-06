import * as React from "react"
import { gsap } from "gsap";
import {fadeAnimation, fadeAnimationOpacity} from '@style/components/fade-animation.module.scss'

const FadeAnimation: React.FC = ({children, onlyFade}: any) => {
  const triggerRef = React.useRef<HTMLDivElement>(null);
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
      options.y = 0;
    }
    gsap.to(triggerRef.current, options);
  }, []);
  return (
    <div className={`${fadeAnimation} ${onlyFade && fadeAnimationOpacity}`} ref={triggerRef}>
      {children}
    </div>
  )
}

export default FadeAnimation;