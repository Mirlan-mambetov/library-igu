import { DetailsHTMLAttributes } from "react";
import { LinkProps } from "./Link.props";

export interface ListGroup extends DetailsHTMLAttributes<HTMLUListElement> {
  menu: LinkProps[]
  icon?: boolean
}