import { IGatsbyImageData } from "gatsby-plugin-image"

export type TImagesBlockItem = {
  id: string,
  gatsbyImageData: IGatsbyImageData;
};
export type TImagesBlock = {
  id: string;
  images: TImagesBlockItem[];
  internal: {
    type: "ContentfulImagesBlock";
  };
};
export type TImagesBlockProps = {
  content: TImagesBlock;
}