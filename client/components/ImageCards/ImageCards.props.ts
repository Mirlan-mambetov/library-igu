import { DelHTMLAttributes } from "react";
import { ImageCardsIterface } from "../../interfaces/ImageCards.props";

export interface ImageCardsProps extends DelHTMLAttributes<HTMLDivElement> {
  images: ImageCardsIterface[]
}