import { DetailsHTMLAttributes } from "react";
import { SubcontentI } from "../../Interfaces/Hero.interface";

export interface HeroProps extends DetailsHTMLAttributes<HTMLDivElement> {
  title?: string
  background?: string
  subTitle?: string
  subContent?: SubcontentI[]
  information?: number
  subContentOrientation?: 'row' | 'column'
  button?: boolean
}