import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '@style/global/index.scss';
import Layout from "@components/Layout";
import Banner from "@components/Banner";

// TODO: add eslint configuration
// TODO: fetch blog posts
// TODO: create single post template
// TODO: style navigation
// TODO: add simple opacity & transform sections animation (data-aos...)
// TODO: create container 
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>home</h1>
      <Banner />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
