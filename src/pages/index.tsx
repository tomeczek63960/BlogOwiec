import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '@style/global/index.scss';
import Layout from "@components/Layout";
import { graphql } from "gatsby"
import ContentSwitcher from "@components/ContentSwitcher";

// TODO: get all data from contentful
// TODO: add eslint configuration
// TODO: fetch blog posts
// TODO: create single post template
// TODO: style navigation
// TODO: add simple opacity & transform sections animation (data-aos...)
// TODO: create container 
// TODO: add transition between pages
const IndexPage: React.FC<PageProps> = ({data}: any) => {
  const {contents} = data.contentfulPages;
  return (
    <Layout>
      {
        contents.map((content: any) => <ContentSwitcher content={content} key={content.id}/>)
      }
    </Layout>
  )
}

export default IndexPage;

export const query = graphql`
  query MyQuery {
    contentfulPages(slug: {eq: "/"}) {
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


export const Head: HeadFC = () => <title>Home Page</title>
