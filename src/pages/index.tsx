import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '@style/global/index.scss';
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Introduction from "@components/Introduction";
import SliderCarousel from "@components/SliderCarousel";
import Parallax from "@components/Parallax";
import PostsList from "@components/PostsList";

// TODO: get all data from contentful
// TODO: add eslint configuration
// TODO: fetch blog posts
// TODO: create single post template
// TODO: style navigation
// TODO: add simple opacity & transform sections animation (data-aos...)
// TODO: create container 
// TODO: add transition between pages
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Banner />
      <Introduction />
      <Parallax />
      <SliderCarousel />
      <PostsList />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
