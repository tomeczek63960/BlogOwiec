import * as React from "react"
import { parallax, parallax__image } from '@style/components/parallax.module.scss';
import { container } from '@style/components/container.module.scss';

const Parallax: React.FC = () => {
  return (
    <section className={parallax}>
      <div className={container}>
          <div
            className={parallax__image}
            style={{backgroundImage: 'url(/parallax.jpg)'}}
          ></div>
      </div>
    </section>
  )
}

export default Parallax;