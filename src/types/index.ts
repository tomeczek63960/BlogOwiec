import { IGatsbyImageData } from "gatsby-plugin-image"
import { ContentfulRichTextGatsbyReference, RenderRichTextData } from "gatsby-source-contentful/rich-text";

// FORM TYPES
export type TFormInitialValue = {
  value: string;
  isValid: boolean;
  touched: boolean
}
export type TInputGroupProps = {
  id: string;
  name: string;
  value: TFormInitialValue;
  setValue: Function;
  isTextarea?: boolean;
  type?: string;
  label?: string;
  placeholder?: string;
  validation?: Function;
}

// CONTENTFUL OBJECTS TYPES
export type TFooterCol = {
  title: string;
  url: string;
  id: string;
}
export type TCategory = {
  id: string;
  name: string;
  node_locale: string;
}
export type TNavItem = {
  title: string;
  url: string;
  id: string;
}
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
export type TBanner = {
  image: {
    gatsbyImageData: IGatsbyImageData;
  };
  internal: {
    type: "ContentfulBanner";
  },
  id: string;
}
export type TText = {
  internal: {
    type: "ContentfulText";
  };
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  id: string;
}
export type TParallax = {
  image: {
    url: string;
  };
  internal: {
    type: "ContentfulParallax";
  };
  id: string;
}
export type TBlogReference = {
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  internal: {
    type: "ContentfulBlogsReference";
  },
  blogReference: TPost[];
  id: string;
}
export type TBlogPosts = {
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  internal: {
    type: "ContentfulBlogPosts";
  },
  id: string;
}
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
export type TContactForm = {
  id: string;
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  internal: {
    type: "ContentfulContactForm"
  }
}
// XXX--- CONTENTFUL OBJECTS TYPES ---XXX

// TYPES FOR COMPONENTS PROPS
export type TPropsBanner = {
  content: TBanner;
}
type TListingProps = {
  posts: {
    nodes: TPost[]
  };
  categories: {
    nodes: TCategory[]
  };
}
export type TBlogListingProps = {
  content: TBlogPosts;
  listing: TListingProps;
}
export type TImagesBlockProps = {
  content: TImagesBlock;
}
export type TTextProps = {
  content: TText;
}
export type TParallaxProps = {
  content: TParallax;
}
export type TPostCardProps = {
  post: TPost;
}
export type TBlogReferenceProps = {
  content: TBlogReference;
}
export type TFadeAnimationProps = {
  children: React.ReactNode;
  onlyFade?: boolean;
}
export type TTransitionLinkProps = {
  children: React.ReactNode;
  direction?: string;
  activeClassName?: string;
  className?: string;
  url: string;
  click?: Function
}
export type TContactFormProps = {
  content: TContactForm;
}
// XXX--- TYPES FOR COMPONENTS PROPS ---XXX

// PAGES PROPS & CONTENT OPTIONS & CONTEXT
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
export type TPageContent = TBanner | TText | TParallax | TBlogReference | TImagesBlock | TBlogPosts;
export type TPageContents = (TBanner | TText | TParallax | TBlogReference | TImagesBlock | TBlogPosts)[];

export type TContentSwitcherProps = {
  content: TPageContent;
  listing: TListingProps;
}

export type TLayoutProps = {
  children: React.ReactNode;
  nav: TNav;
  footer: TFooter
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
export type TNav = {
  nav: {
    nodes: TNavItem[];
  }
}

export type TSharedPageProps = TFooter & TNav;
export type TPageDataProps = TSharedPageProps & {
  page: {
    title: string;
    contents: TPageContents;
  };
  posts: {
    nodes: TPost[]
  };
  categories: {
    nodes: TCategory[]
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
// XXX--- PAGES PROPS & CONTENT OPTIONS & CONTEXT ---XXX
