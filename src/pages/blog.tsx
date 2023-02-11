import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "@style/global/index.scss"
import Layout from "@components/Layout"
import { graphql } from "gatsby"
import ContentSwitcher from "@components/ContentSwitcher"

const BlogPage: React.FC<PageProps> = ({data}: any) => {
  const {contents} = data.contentfulPages
  const listing = {
    categories: data.categories,
    posts: data.posts
  }
  return (
    <Layout>
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
