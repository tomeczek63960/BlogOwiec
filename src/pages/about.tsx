import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '@style/global/index.scss';
import Layout from "@components/Layout";
import { graphql } from "gatsby"
import ContentSwitcher from "@components/ContentSwitcher";

const AboutPage: React.FC<PageProps> = ({data}: any) => {
  const {contents} = data.contentfulPages;
  console.log(data)
  return (
    <Layout>
      {
        contents?.map((content: any) => <ContentSwitcher content={content} key={content.id}/>)
      }
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query MyQuery {
    contentfulPages(slug: {eq: "/about"}) {
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
      }
    }
  }
`;

export const Head: HeadFC = () => <title>About Page</title>
