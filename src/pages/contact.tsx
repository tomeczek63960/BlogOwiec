import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "@style/global/index.scss"
import Layout from "@components/Layout"
import { graphql } from "gatsby"
import ContentSwitcher from "@components/ContentSwitcher"
const ContactPage: React.FC<PageProps> = ({data}: any) => {
  const {contents} = data.contentfulPages
  return (
    <Layout data={data}>
      {
        contents?.map((content: any) => <ContentSwitcher content={content} key={content.id}/>)
      }
    </Layout>
  )
}

export default ContactPage

// TODO: extract contents query to fragments when gatsby 5 will be stable
export const query = graphql`
  query MyQuery {
    contentfulPages(slug: {eq: "/contact"}) {
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
        ... on ContentfulContactForm {
          id
          content {
            raw
          }
          internal {
            type
          }
        }
      }
    }
  }
`


export const Head: HeadFC = () => <title>Contact Page</title>
