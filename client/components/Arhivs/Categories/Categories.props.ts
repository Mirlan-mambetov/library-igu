import { DetailsHTMLAttributes } from "react";
import { VestnikCategoryInterface } from "../../../interfaces/Vestnik.interface";

export interface CategoriesProps extends DetailsHTMLAttributes<HTMLDivElement> {
  arhivs: VestnikCategoryInterface[]
}