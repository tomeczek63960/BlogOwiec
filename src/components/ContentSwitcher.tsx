import * as React from "react"
import Banner from "@components/Banner"
import Introduction from "@components/Introduction"
import SliderCarousel from "@components/SliderCarousel"
import ImagesBlock from "@components/ImagesBlock"
import Parallax from "@components/Parallax"
import FadeAnimation from "@components/FadeAnimation"
import ContactForm from "@components/ContactForm"
import BlogListing from "@components/BlogListing"

const ContentSwitcher: React.FC = ({ content, listing }: any) => {
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
  const Component = components[type]
  return (
    <FadeAnimation onlyFade={type === "ContentfulParallax"}>
      <Component content={content} listing={shouldPassListingProps ? listing : {}} />
    </FadeAnimation>
  )
}

export default ContentSwitcher