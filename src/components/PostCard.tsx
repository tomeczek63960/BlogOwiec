import * as React from "react"
import { postCard } from '@style/components/posts-list.module.scss';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const PostCard: React.FC = () => {
  return (
    <Link
      to="/"
      className={postCard}
    >
      <StaticImage
        src="../images/banner.jpg"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fullWidth"
      />
      <h4>Post title</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae earum officiis velit corporis delectus!</p>
    </Link>
  )
}

export default PostCard;