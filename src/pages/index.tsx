import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {banner} from '../style/components/banner.module.scss';
import '../style/global/index.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main >
      <div className={banner}>
        <h1>heheehehehehe</h1>
        <h1>heheehehehehe</h1>
        <h1>heheehehehehe</h1>
        <h1>heheehehehehe</h1>
        <h1>heheehehehehe</h1>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
