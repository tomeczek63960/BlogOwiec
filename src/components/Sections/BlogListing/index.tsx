import React, { useEffect, useState, FC } from "react"
import { blogListing, blogListing__content, blogListing__filters, blogListing__filters__item, blogListing__filters__itemActive } from "./style.module.scss"
import { container } from "@style/container.module.scss"
import PostCard from "@components/PostCard"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import type { TBlogListingProps, TPost, TCategory } from "./types"

const BlogListing: FC<TBlogListingProps> = ({content, listing}) => {
  const posts = listing?.posts;
  const categories = listing?.categories;
  const [animationParent] = useAutoAnimate()
  const [activePosts, setActivePosts] = useState(posts?.nodes)
  const [activeCategories, setActiveCategories] = useState<string[]>([])
  const updateActiveCategories = (category: string) => {
    const index = activeCategories.indexOf(category)
    if (index !== -1) {
      const newCategories = activeCategories.filter((prevCategory: string) => prevCategory !== category)
      setActiveCategories(newCategories)
    } else {
      setActiveCategories((prevState: string[]) => [...prevState, category])
    }
  }
  useEffect(() => {
    if (activeCategories.length) {
      const postsNew = posts?.nodes.filter((post: TPost) => activeCategories.includes(post.category.name))
      setActivePosts(postsNew)
    } else {
      setActivePosts(posts?.nodes)
    }
  }, [activeCategories])
  return (
    <section className={blogListing}>
      <div className={container}>
        {renderRichText(content.content)}
        <div className={blogListing__filters}>
          {categories?.nodes.map((category: TCategory) => 
            <button
              className={`${blogListing__filters__item} ${activeCategories.includes(category.name) ? blogListing__filters__itemActive : ''}`}
              key={category.id}
              onClick={() => updateActiveCategories(category.name)}
            >{category.name}</button>
          )}
        </div>
        <div className={blogListing__content} ref={animationParent}>
          {activePosts?.map((post: TPost) => <PostCard key={`blog-listing-${post.id}`} post={post} />)}
        </div>
      </div>
    </section>
  )
}

export default BlogListing