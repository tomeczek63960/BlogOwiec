import { IGatsbyImageData } from "gatsby-plugin-image"

export type TParallax = {
  image: {
    gatsbyImageData: IGatsbyImageData;
  };
  internal: {
    type: "ContentfulParallax";
  };
  id: string;
}
export type TParallaxProps = {
  content: TParallax;
}