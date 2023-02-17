export type TParallax = {
  image: {
    url: string;
  };
  internal: {
    type: "ContentfulParallax";
  };
  id: string;
}
export type TParallaxProps = {
  content: TParallax;
}