import * as React from "react"
import { introduction } from "./style.module.scss"
import { container } from "@style/container.module.scss"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { TTextProps } from "./types"

const Introduction: React.FC<TTextProps> = ({ content }) => {
  return (
    <section className={introduction}>
      <div className={container}>
        {renderRichText(content.content)}
      </div>
    </section>
  )
}

export default Introduction