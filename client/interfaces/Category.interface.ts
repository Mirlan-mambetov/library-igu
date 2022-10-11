export interface CategoryI {
  id: string | number
  title: string
  description: string
  position?: 'fixed' | 'default'
  categoryLink?: string
}