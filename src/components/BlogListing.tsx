import * as React from "react"
import { blogListing, blogListing__content } from "@style/components/blog-listing.module.scss"
import { container } from "@style/components/container.module.scss"
import PostCard from "@components/PostCard"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { useStaticQuery, graphql } from "gatsby"

const BlogListing: React.FC = ({content}: any) => {
  const data = useStaticQuery(graphql`
    query BlogPosts {
      posts: allContentfulBlogs(sort: {createdAt: DESC}) {
        nodes {
          title
          slug
          id
          imageCard {
            gatsbyImageData
          }
          shortDescription {
            shortDescription
          }
        }
      }
    }
  `)
  
  return (
    <section className={blogListing}>
      <div className={container}>
        {renderRichText(content.content)}
        <div className={blogListing__content}>
          {data?.posts?.nodes?.map((post: any) => <PostCard key={`blog-listing-${post.id}`} post={post} />)}
        </div>
      </div>
    </section>
  )
}

export default BlogListing