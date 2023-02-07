import React, { useEffect, useState, FC } from "react"
import { blogListing, blogListing__content, blogListing__filters, blogListing__filters__item, blogListing__filters__itemActive } from "@style/components/blog-listing.module.scss"
import { container } from "@style/components/container.module.scss"
import PostCard from "@components/PostCard"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { useStaticQuery, graphql } from "gatsby"
import { useAutoAnimate } from '@formkit/auto-animate/react'

const BlogListing: FC = ({content}: any) => {
  const data = useStaticQuery(graphql`
    query BlogPosts {
      posts: allContentfulBlogs(sort: {createdAt: DESC}) {
        nodes {
          title
          slug
          id
          category {
            name
          }
          imageCard {
            gatsbyImageData
          }
          shortDescription {
            shortDescription
          }
        }
      }
      categories: allContentfulBlogCategory {
        nodes {
          id
          name
        }
      }
    }
  `)
  const [animationParent] = useAutoAnimate()
  const [activePosts, setActivePosts] = useState(data?.posts?.nodes);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const updateActiveCategories = (category: string) => {
    const index = activeCategories.indexOf(category);
    if (index !== -1) {
      const newCategories = activeCategories.filter((prevCategory: string) => prevCategory !== category);
      setActiveCategories(newCategories)
    } else {
      setActiveCategories((prevState: string[]) => [...prevState, category]);
    }
  }
  useEffect(() => {
    if (activeCategories.length) {
      const posts = data?.posts?.nodes.filter((post: any) => activeCategories.includes(post.category.name));
      setActivePosts(posts);
    } else {
      setActivePosts(data?.posts?.nodes);
    }
  }, [activeCategories])
  return (
    <section className={blogListing}>
      <div className={container}>
        {renderRichText(content.content)}
        <div className={blogListing__filters}>
          {data?.categories.nodes.map((category: any) => 
            <button
              className={`${blogListing__filters__item} ${activeCategories.includes(category.name) ? blogListing__filters__itemActive : ''}`}
              key={category.id}
              onClick={() => updateActiveCategories(category.name)}
            >{category.name}</button>
          )}
        </div>
        <div className={blogListing__content} ref={animationParent}>
          {activePosts?.map((post: any) => <PostCard key={`blog-listing-${post.id}`} post={post} />)}
        </div>
      </div>
    </section>
  )
}

export default BlogListing