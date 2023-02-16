import * as React from "react"
import { slider, sliderContent } from "./style.module.scss"
import { container } from "@style/container.module.scss"
import Slider from "react-slick"
import PostCard from "@components/PostCard"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { TBlogReferenceProps, TPost } from "../../../types"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  autoplay: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
}

const SliderCarousel: React.FC<TBlogReferenceProps> = ({content}) => {
  return (
    <section className={slider}>
      <div className={container}>
        {content.content && renderRichText(content.content)}
        <Slider {...settings} className={sliderContent}>
          {content.blogReference?.map((blogPost: TPost, index: number) => 
            <PostCard key={`blogs-slider-${blogPost.id}-${index}`} post={blogPost} />
          )}
        </Slider>
      </div>
    </section>
  )
}

export default SliderCarousel