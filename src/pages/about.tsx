import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { banner } from '@style/components/banner.module.scss';
import '@style/global/index.scss';
import { StaticImage } from "gatsby-plugin-image"
import Layout from "@components/Layout";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>about</h1>
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

export default AboutPage

export const Head: HeadFC = () => <title>About Page</title>
