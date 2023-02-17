export type TNavItem = {
  title: string;
  url: string;
  id: string;
}
export type TNav = {
  nav: {
    nodes: TNavItem[];
  }
}