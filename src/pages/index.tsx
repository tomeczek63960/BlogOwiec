import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "@style/global/index.scss"
import Layout from "@components/Layout"
import { graphql } from "gatsby"
import ContentSwitcher from "@components/ContentSwitcher"
import {Link, Trans, useTranslation} from 'gatsby-plugin-react-i18next';
// TODO: add dynamic page & there all content handling functionalities
// TODO: add transition between pages
// TODO: update all types
// TODO: update contentful images & texts
// TODO: add contact form validations & sample submit method
// TODO: add google fonts sans serif
// TODO: optimization - lazy loading - dynamic imports
const IndexPage: React.FC<PageProps> = ({data}: any) => {
  const {contents} = data?.contentfulPages
  const {footer, nav} = data;
  const {t} = useTranslation();

  return (
    <Layout footer={footer} nav={nav}>
      <h1>{t('home')} <Trans>home</Trans></h1>
      {
        contents.map((content: any) => <ContentSwitcher content={content} key={content.id}/>)
      }
    </Layout>
  )
}

export default IndexPage

// TODO: extract contents query to fragments when gatsby 5 will be stable
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
    contentfulPages(slug: {eq: "/"}, node_locale: {eq: $language}) {
      contents {
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
          content {
            raw
          }
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


export const Head: HeadFC = () => <title>Home Page</title>
