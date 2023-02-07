import * as React from "react"
import Banner from "@components/Banner";
import Introduction from "@components/Introduction";
import SliderCarousel from "@components/SliderCarousel";
import ImagesBlock from "@components/ImagesBlock";
import Parallax from "@components/Parallax";
import PostsList from "@components/PostsList";
import FadeAnimation from "@components/FadeAnimation";
import ContactForm from "@components/ContactForm";

const ContentSwitcher: React.FC = ({ content }: any) => {
  const type: 'ContentfulBanner' | 'ContentfulText' | 'ContentfulParallax' | 'ContentfulBlogsReference' | 'ContentfulImagesBlock' | 'ContentfulContactForm' = content.internal.type
  const components = {
    ContentfulBanner: Banner,
    ContentfulText: Introduction,
    ContentfulParallax: Parallax,
    ContentfulBlogsReference: SliderCarousel,
    ContentfulImagesBlock: ImagesBlock,
    ContentfulContactForm: ContactForm
  }
  const Component = components[type];
  return (
    <FadeAnimation onlyFade={type === 'ContentfulParallax'}>
      <Component content={content} />
    </FadeAnimation>
  )
}

export default ContentSwitcher;