import { ContentfulRichTextGatsbyReference, RenderRichTextData } from "gatsby-source-contentful/rich-text";
import { TPost } from "@components/Sections/BlogListing/types";

export type TBlogReference = {
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  internal: {
    type: "ContentfulBlogsReference";
  },
  blogReference: TPost[];
  id: string;
}
export type TBlogReferenceProps = {
  content: TBlogReference;
}