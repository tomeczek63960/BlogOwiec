import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "@style/global/index.scss"
import Layout from "@components/Layout"
import { graphql } from "gatsby"
import ContentSwitcher from "@components/ContentSwitcher"

const BlogPage: React.FC<PageProps> = ({data}: any) => {
  const {contents} = data.contentfulPages
  const {footer, nav, categories, posts} = data;
  const listing = {
    categories,
    posts
  }
  return (
    <Layout footer={footer} nav={nav}>
      {
        contents.map((content: any) => <ContentSwitcher content={content} listing={listing} key={content.id}/>)
      }
    </Layout>
  )
}

export default BlogPage

// TODO: extract contents query to fragments when gatsby 5 will be stable
export const query = graphql`
  query BlogPageQuery($language: String!) {
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
    contentfulPages(slug: {eq: "/blog"}, node_locale: {eq: $language}) {
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


export const Head: HeadFC = () => <title>Home Page</title>
