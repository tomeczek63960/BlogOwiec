import * as React from "react"
import type { HeadFC ,PageProps } from "gatsby"
import "@style/global/index.scss"
import Layout from "@components/Layout"
import { graphql } from "gatsby"
import ContentSwitcher from "@components/ContentSwitcher"
import type { TPageDataProps, TPageContent, TPageContext } from "../types";

// TODO: update seo for pages
const PageTemplate: React.FC<PageProps<TPageDataProps>> = ({data}) => {
  const {contents} = data.page
  const {footer, nav, categories, posts} = data
  const listing = {
    categories,
    posts
  }
  return (
    <Layout footer={footer} nav={nav}>
      {
        contents?.map((content: TPageContent) => <ContentSwitcher listing={listing} content={content} key={content.id}/>)
      }
    </Layout>
  )
}

export default PageTemplate

export const Head: HeadFC<TPageDataProps, TPageContext> = ({data, pageContext}) => {
  const title = data.page.title
  return (
    <>
      <html lang={pageContext.language} />
      <title>{title}</title>
    </>
  )
}

// TODO: extract contents query to fragments when gatsby 5 ts will support it
export const query = graphql`
  query PageTemplateQuery($language: String!, $slug:String!) {
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
    page: contentfulPages(slug: {eq: $slug}, node_locale: {eq: $language}) {
      title
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
            node_locale
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
        ... on ContentfulContactForm {
          id
          content {
            raw
          }
          internal {
            type
          }
        }
        ... on ContentfulBlogPosts {
          id
          internal {
            type
          }
          content {
            raw
          }
        }
      }
    }
    posts: allContentfulBlogs(sort: {createdAt: DESC}, filter: {node_locale: {eq: $language}}) {
      nodes {
        title
        slug
        id
        node_locale
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
    }
    categories: allContentfulBlogCategory(filter: {node_locale: {eq: $language}}) {
      nodes {
        id
        name
        node_locale
      }
    }
  }
`