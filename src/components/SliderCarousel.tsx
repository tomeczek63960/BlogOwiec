import * as React from "react"
import { slider, sliderSlide, sliderContent } from '@style/components/slider.module.scss';
import { container } from '@style/components/container.module.scss';
import { Link } from "gatsby"
import Slider from "react-slick"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const SliderCarousel: React.FC = ({content}: any) => {
  return (
    <section className={slider}>
      <div className={container}>
        <h2>Może Ci się spodobać</h2>
        <Slider {...settings} className={sliderContent}>
          {content.blogReference.map((blogPost: any) => <Link
              key={blogPost.id}
              to={blogPost.slug}
              className={sliderSlide}
            >
              <GatsbyImage image={getImage(blogPost.imageCard)} alt="blog card iamge" />
              <h3>{blogPost.title}</h3>
              <p>{blogPost.shortDescription.shortDescription}</p>
            </Link>
          )}
        </Slider>
      </div>
    </section>
  )
}

export default SliderCarousel;