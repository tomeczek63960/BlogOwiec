export type TFooterCol = {
  title: string;
  url: string;
  id: string;
}
export type TFooter = {
  footer: {
    firstColItems: TFooterCol[];
    firstColTitle: string;
    facebookUrl: string;
    secondColItems: TFooterCol[];
    secondColTitle: string;
    thirdColTitle: string;
    twitterUrl: string;
    instagramUrl: string;
  }
}