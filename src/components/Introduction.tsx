import * as React from "react"
import { introduction } from "@style/components/introduction.module.scss"
import { container } from "@style/components/container.module.scss"
import { renderRichText } from "gatsby-source-contentful/rich-text"
const Introduction: React.FC = ({ content }: any) => {
  return (
    <section className={introduction}>
      <div className={container}>
        {renderRichText(content.content)}
      </div>
    </section>
  )
}

export default Introduction