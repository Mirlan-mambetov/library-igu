export interface FileI {
  id: string | number
  title: string
  authors: string[]
  category?: string
  downloaded: number
  views: number
  file: string
  published: string
}