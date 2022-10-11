interface linksI {
  arhivLink?: string
}
export interface ArhivsProps extends linksI {
  totalArhivs: number
  totalMaterials: number
  arhivs: ArhivsI[]
  arhivTitle: string
}
export interface ArhivsI {
  id: string | number
  name: string
  alias: string
}
