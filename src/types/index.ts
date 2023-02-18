import { IGatsbyImageData } from "gatsby-plugin-image"

import { TBanner } from "@components/Sections/Banner/types"
import { TPost, TCategory, TListingProps, TBlogPosts } from "@components/Sections/BlogListing/types"
import { TImagesBlock } from "@components/Sections/ImagesBlock/types"
import { TText } from "@components/Sections/Introduction/types"
import { TParallax } from "@components/Sections/Parallax/types"
import { TBlogReference } from "@components/Sections/SliderCarousel/types"
import { TContactForm } from "@components/Sections/ContactForm/types"
import { TFooter } from "@components/Footer/types"
import { TNav } from "@components/Header/types"

// PAGE | BLOG TEMPLATE TYPES & PAGE CONTEXT TYPES & CONTENT SWITCHER TYPES
export type TPageContext = {
  slug: string;
  language: string;
  i18n: {
    language: string;
    languages: string[];
    defaultLanguage: string;
    generateDefaultLanguagePage: boolean;
    routed: boolean;
    originalPath: string;
    path: string;
  }
}
export type TPageContent = TBanner | TText | TParallax | TBlogReference | TImagesBlock | TBlogPosts | TContactForm;
export type TPageContents = (TBanner | TText | TParallax | TBlogReference | TImagesBlock | TBlogPosts | TContactForm)[];

export type TContentSwitcherProps = {
  content: TPageContent;
  listing?: TListingProps;
  critical?: boolean;
}

export type TSharedPageProps = TFooter & TNav;
export type TPageDataProps = TSharedPageProps & {
  page: {
    title: string;
    seoDescription: {
      seoDescription: string;
    };
    contents: TPageContents;
  };
  posts: {
    nodes: TPost[];
  };
  categories: {
    nodes: TCategory[];
  };
}
export type TBlogPageDataProps = TSharedPageProps & {
  blog: {
    id: string;
    slug: string;
    title: string;
    node_locale: string;
    image: {
      gatsbyImageData: IGatsbyImageData;
    };
    shortDescription: {
      shortDescription: string;
    },
    content: TPageContents
  };
}
