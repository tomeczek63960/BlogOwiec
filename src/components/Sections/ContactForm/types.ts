import { ContentfulRichTextGatsbyReference, RenderRichTextData } from "gatsby-source-contentful/rich-text";

export type TFormInitialValue = {
  value: string;
  isValid: boolean;
  touched: boolean
}
export type TContactForm = {
  id: string;
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  internal: {
    type: "ContentfulContactForm"
  }
}
export type TContactFormProps = {
  content: TContactForm;
}