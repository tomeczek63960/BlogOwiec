import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
import "@style/global/index.scss"
import Layout from "@components/Layout"
import Banner from "@components/Banner"
import { container } from "@style/components/container.module.scss"
import ContentSwitcher from "@components/ContentSwitcher"

const Template: React.FC<PageProps> = ({data}: any) => {
  const {footer, nav, blog} = data;
  const {title, slug, id, image, content, shortDescription} = blog
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

export const Head: HeadFC = ({data}: any) => <title>{data?.blog?.title}</title>

export const query = graphql`
  query BlogPostTemplateQuery($language: String!, $slug:String!) {
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
    blog: contentfulBlogs(slug: {eq: $slug}, node_locale: {eq: $language}) {
      id
      slug
      title
      node_locale
      image {
        gatsbyImageData
      }
      shortDescription {
        shortDescription
      }
      content {
        ... on ContentfulImagesBlock {
          id
          images {
            id
            gatsbyImageData
          }
          internal {
            type
          }
        }
        ... on ContentfulBanner {
          image {
            gatsbyImageData
          }
          internal {
            type
          }
          id
        }
        ... on ContentfulBlogsReference {
          internal {
            type
          }
          blogReference {
            slug
            title
            category {
              name
            }
            imageCard {
              gatsbyImageData
            }
            shortDescription {
              shortDescription
            }
          }
          id
        }
        ... on ContentfulParallax {
          image {
            url
          }
          internal {
            type
          }
          id
        }
        ... on ContentfulText {
          internal {
            type
          }
          content {
            raw
          }
          id
        }
      }
    }
  }
`