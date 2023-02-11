import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
import "@style/global/index.scss"
import Layout from "@components/Layout"
import Banner from "@components/Banner"
import { container } from "@style/components/container.module.scss"
import ContentSwitcher from "@components/ContentSwitcher"

const Template: React.FC<PageProps> = ({pageContext, data}: any) => {
  const {title, slug, id, image, content, shortDescription} = pageContext.blog
  const {footer, nav} = data;
  return (
    <Layout footer={footer} nav={nav}>
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

export const query = graphql`
  query HomePageQuery($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    nav: allContentfulNav(filter: {node_locale: {eq: $language}, hiddeInNavigation: {eq: false}}, sort: {order: ASC}) {
      nodes {
        title
        url
        id
      }
    }
    footer: contentfulFooter(node_locale: {eq: $language}) {
      firstColItems{
        title
        url
        id
      }
      firstColTitle
      facebookUrl
      secondColItems {
        title
        url
        id
      }
      secondColTitle
      thirdColTitle
      twitterUrl
      instagramUrl
    }
  }
`


