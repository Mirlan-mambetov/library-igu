import { DetailsHTMLAttributes } from "react";
import { SubContentProps } from "./SubContent/SubContent.props";

export interface HeroProps extends DetailsHTMLAttributes<HTMLDivElement> {
  background?: string
  subContent?: SubContentProps
}