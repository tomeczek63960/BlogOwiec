import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import '@style/global/index.scss';
import Layout from "@components/Layout";
import Banner from "@components/Banner";
import Introduction from "@components/Introduction";
import SliderCarousel from "@components/SliderCarousel";
import Parallax from "@components/Parallax";
import PostsList from "@components/PostsList";
import { container } from '@style/components/container.module.scss';
import ImagesBlock from "@components/ImagesBlock";


const Template: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className={container}>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
      </div>
      <Banner />
      <Introduction />
      <Introduction />
      <Introduction />
      <ImagesBlock />
      <Parallax />
      <SliderCarousel />
    </Layout>
  )
}

export default Template

export const Head: HeadFC = () => <title>Home Page</title>
