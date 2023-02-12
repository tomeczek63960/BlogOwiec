import * as React from "react"
import { postCard, postCard__category } from "@style/components/post-card.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import TransitionLink from "@components/TransitionLink"

const PostCard: React.FC = ({post}: any) => {
  const image = getImage(post.imageCard)
  return (
    <TransitionLink
      direction="right"
      url={`/${post.slug}`}
      className={postCard}
    >
      <GatsbyImage image={image} alt="banner iamge" />
      <span className={postCard__category}>{post.category?.name}</span>
      <h3>{post.title}</h3>
      <p>{post.shortDescription?.shortDescription}</p>
    </TransitionLink>
  )
}

export default PostCard