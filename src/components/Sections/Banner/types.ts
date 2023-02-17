import { IGatsbyImageData } from "gatsby-plugin-image"

export type TBanner = {
  image: {
    gatsbyImageData: IGatsbyImageData;
  };
  internal: {
    type: "ContentfulBanner";
  },
  id: string;
}
export type TPropsBanner = {
  content: TBanner;
}