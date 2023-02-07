import * as React from "react"
import { postCard } from "@style/components/post-card.module.scss"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PostCard: React.FC = ({post}: any) => {
  const image = getImage(post.imageCard)
  return (
    <Link
      to={`/${post.slug}`}
      className={postCard}
    >
      <GatsbyImage image={image} alt="banner iamge" />
      <h3>{post.title}</h3>
      <p>{post.shortDescription.shortDescription}</p>
    </Link>
  )
}

export default PostCard