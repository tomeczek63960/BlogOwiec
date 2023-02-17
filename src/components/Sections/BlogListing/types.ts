import { IGatsbyImageData } from "gatsby-plugin-image"
import { ContentfulRichTextGatsbyReference, RenderRichTextData } from "gatsby-source-contentful/rich-text";

export type TPost = {
  title: string;
  slug: string;
  id: string;
  node_locale: string;
  category: {
    name: string;
  };
  imageCard: {
    gatsbyImageData: IGatsbyImageData;
  };
  shortDescription: {
    shortDescription: string;
  };
}
export type TCategory = {
  id: string;
  name: string;
  node_locale: string;
}
export type TListingProps = {
  posts?: {
    nodes: TPost[]
  };
  categories?: {
    nodes: TCategory[]
  };
}
export type TBlogPosts = {
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  internal: {
    type: "ContentfulBlogPosts";
  },
  id: string;
}
export type TBlogListingProps = {
  content: TBlogPosts;
  listing?: TListingProps;
}
