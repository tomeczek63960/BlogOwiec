import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { banner } from '@style/components/banner.module.scss';
import '@style/global/index.scss';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "@components/Layout";

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
      <div className={banner}>
        <StaticImage
          src="../images/banner.jpg"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fixed"
          width={200}
          height={200}
        />
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
