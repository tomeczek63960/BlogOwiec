import * as React from "react"
import { slider, sliderSlide, sliderContent } from '@style/components/slider.module.scss';
import { container } from '@style/components/container.module.scss';

import Slider from "react-slick"
import { StaticImage } from "gatsby-plugin-image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  autoplay: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
}

const SliderCarousel: React.FC = () => {
  return (
    <section className={slider}>
      <div className={container}>
        <Slider {...settings} className={sliderContent}>
          <div className={sliderSlide}>
            <StaticImage
              src="../images/banner.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              layout="fullWidth"
            />
            <h3>rere hre</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, corrupti mollitia soluta quam id culpa nesciunt voluptatibus</p>
          </div>
          <div className={sliderSlide}>
            <StaticImage
              src="../images/banner.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              layout="fullWidth"
            />
            <h3>rere hre</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, corrupti mollitia soluta quam id culpa nesciunt voluptatibus</p>
          </div>
          <div className={sliderSlide}>
            <StaticImage
              src="../images/banner.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              layout="fullWidth"
            />
            <h3>rere hre</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, corrupti mollitia soluta quam id culpa nesciunt voluptatibus</p>
          </div>
          <div className={sliderSlide}>
            <StaticImage
              src="../images/banner.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              layout="fullWidth"
            />
            <h3>rere hre</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, corrupti mollitia soluta quam id culpa nesciunt voluptatibus</p>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default SliderCarousel;