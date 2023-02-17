import { ContentfulRichTextGatsbyReference, RenderRichTextData } from "gatsby-source-contentful/rich-text";

export type TText = {
  internal: {
    type: "ContentfulText";
  };
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  id: string;
}

export type TTextProps = {
  content: TText;
}