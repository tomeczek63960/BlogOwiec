import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '@style/global/index.scss';
import Layout from "@components/Layout";
import Banner from "@components/Banner";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>about</h1>
      <Banner />      
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Page</title>
