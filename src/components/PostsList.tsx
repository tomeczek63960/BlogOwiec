import * as React from "react"
import { postsList, postsList__content } from '@style/components/posts-list.module.scss';
import { container } from '@style/components/container.module.scss';
import PostCard from '@components/PostCard';

const PostsList: React.FC = () => {
  return (
    <section className={postsList}>
      <div className={container}>
        <h2>Lista ostatnich wpisów</h2>
        <div className={postsList__content}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </section>
  )
}

export default PostsList;