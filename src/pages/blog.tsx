import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "@style/global/index.scss"
import Layout from "@components/Layout"
import { graphql } from "gatsby"
import ContentSwitcher from "@components/ContentSwitcher"

const BlogPage: React.FC<PageProps> = ({data}: any) => {
  const {contents} = data.contentfulPages
  return (
    <Layout>
      {
        contents.map((content: any) => <ContentSwitcher content={content} key={content.id}/>)
      }
    </Layout>
  )
}

export default BlogPage

// TODO: extract contents query to fragments when gatsby 5 will be stable
export const query = graphql`
  query MyQuery {
    contentfulPages(slug: {eq: "/blog"}) {
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
  }
`


export const Head: HeadFC = () => <title>Home Page</title>
