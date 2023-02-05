import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '@style/global/index.scss';
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Introduction from "@components/Introduction";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Banner />
      <Introduction />
    </Layout>
  )
}

export default ContactPage;

export const Head: HeadFC = () => <title>Contact Page</title>
