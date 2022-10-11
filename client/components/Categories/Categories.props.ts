import { CategoryI } from "../../interfaces/Category.interface";

export interface CategoriesProps {
  categories: CategoryI[]
  position?: 'default' | 'fixed'
}