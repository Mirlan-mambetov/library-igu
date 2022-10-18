import { ElibraryCategoryI } from "../../../Interfaces/Categories.interface";

export interface CategoriesProps {
  data: ElibraryCategoryI[]
  categoryLink: string
  position?: 'row' | 'column'
  categoryTitle: string
}