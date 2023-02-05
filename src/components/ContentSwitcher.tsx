import * as React from "react"
import Banner from "@components/Banner";
import Introduction from "@components/Introduction";
import SliderCarousel from "@components/SliderCarousel";
import Parallax from "@components/Parallax";
import PostsList from "@components/PostsList";

const ContentSwitcher: React.FC = ({ content }: any) => {
  const type: 'ContentfulBanner' | 'ContentfulText' | 'ContentfulParallax' | 'ContentfulBlogsReference' = content.internal.type
  const components = {
    ContentfulBanner: Banner,
    ContentfulText: Introduction,
    ContentfulParallax: Parallax,
    ContentfulBlogsReference: SliderCarousel
  }
  const Component = components[type];
  return (
    <Component content={content} />
  )
}

export default ContentSwitcher;