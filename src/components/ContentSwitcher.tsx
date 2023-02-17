import * as React from "react"
import Banner from "@components/Sections/Banner"
import Introduction from "@components/Sections/Introduction"
import SliderCarousel from "@components/Sections/SliderCarousel"
import ImagesBlock from "@components/Sections/ImagesBlock"
import Parallax from "@components/Sections/Parallax"
import ContactForm from "@components/Sections/ContactForm"
import BlogListing from "@components/Sections/BlogListing"
import FadeAnimation from "@components/FadeAnimation"
import type { TContentSwitcherProps } from '@src/types'

const ContentSwitcher: React.FC<TContentSwitcherProps> = ({ content, listing }) => {
  const type: "ContentfulBanner" | "ContentfulText" | "ContentfulParallax" | "ContentfulBlogsReference" | "ContentfulImagesBlock" | "ContentfulContactForm" | "ContentfulBlogPosts" = content.internal.type
  const shouldPassListingProps = content.internal.type === "ContentfulBlogPosts"
  const components = {
    ContentfulBanner: Banner,
    ContentfulText: Introduction,
    ContentfulParallax: Parallax,
    ContentfulBlogsReference: SliderCarousel,
    ContentfulImagesBlock: ImagesBlock,
    ContentfulContactForm: ContactForm,
    ContentfulBlogPosts: BlogListing
  }
  const Component: React.FC<TContentSwitcherProps> = components[type] as React.FC<TContentSwitcherProps>
  return (
    <FadeAnimation onlyFade={type === "ContentfulParallax"}>
      <Component content={content} listing={shouldPassListingProps ? listing : undefined} />
    </FadeAnimation>
  )
}

export default ContentSwitcher