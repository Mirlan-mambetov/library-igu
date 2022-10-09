interface ImageBoxContent {
  title: string
  subtitle: string
  description: string
}
export interface ImageBoxProps {
  id: string | number
  image: string
  content: ImageBoxContent
}