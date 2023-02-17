import { DefaultTFuncReturn } from "i18next";
import { TFormInitialValue } from "@components/Sections/ContactForm/types"

export type TInputGroupProps = {
  id: string;
  name: string;
  value: TFormInitialValue;
  setValue: Function;
  isTextarea?: boolean;
  type?: string;
  label?: DefaultTFuncReturn;
  placeholder?: DefaultTFuncReturn;
  validation?: Function;
}