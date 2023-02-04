import * as React from "react"
import { introduction } from '@style/components/introduction.module.scss';
import { container } from '@style/components/container.module.scss';

const Introduction: React.FC = () => {
  return (
    <section className={introduction}>
      <div className={container}>
        <h2>Hello here on my blog</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </section>
  )
}

export default Introduction;