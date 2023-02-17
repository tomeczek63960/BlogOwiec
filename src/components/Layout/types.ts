import { TFooter } from "@components/Footer/types"
import { TNav } from "@components/Header/types"

export type TLayoutProps = TNav & TFooter & {
  children: React.ReactNode;
}