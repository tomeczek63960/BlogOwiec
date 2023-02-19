import * as React from "react"
import { postCard, postCard__category, postCard__image } from "./style.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import TransitionLink from "@components/TransitionLink"
import { TPostCardProps } from "./types"

const PostCard: React.FC<TPostCardProps> = ({post}) => {
  const image = getImage(post.imageCard)
  return (
    <TransitionLink
      direction="right"
      url={`/${post.slug}`}
      className={postCard}
    >
      {image && <GatsbyImage className={postCard__image} image={image} alt="banner iamge" />}
      <span className={postCard__category}>{post.category?.name}</span>
      <h3>{post.title}</h3>
      <p>{post.shortDescription?.shortDescription}</p>
    </TransitionLink>
  )
}

export default PostCard