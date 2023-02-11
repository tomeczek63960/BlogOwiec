import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "@style/global/index.scss"
import Layout from "@components/Layout"
import Banner from "@components/Banner"
import { container } from "@style/components/container.module.scss"
import ContentSwitcher from "@components/ContentSwitcher"

const Template: React.FC<PageProps> = ({pageContext}: any) => {
  const {title, slug, id, image, content, shortDescription} = pageContext.blog
  return (
    <Layout>
      <div className={container}>
        <h1>{title}</h1>
        <p>{shortDescription.shortDescription}</p>
      </div>
      <Banner content={{image}} />
      {
        content?.map((itemContent: any) => <ContentSwitcher content={itemContent} key={itemContent.id}/>)
      }
    </Layout>
  )
}

export default Template

export const Head: HeadFC = ({pageContext}) => <title>{pageContext?.blog?.title}</title>
