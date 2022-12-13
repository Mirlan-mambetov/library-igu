import { CategoryI } from "../../../Interfaces/Categories.interface";

export interface CategoryProps {
  category: CategoryI[]
  categoryLink: string
  position?: 'fixed' | 'default'
  categoryTitle?: string
}