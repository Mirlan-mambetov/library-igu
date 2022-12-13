export interface ArhivsLink {
  id: string | number
  name: string
  alias: string
}
export interface ArhivsInformationI {
  title: string
  totalArhivs: number
  totalMaterials: number
}
export interface ArhivsI {
  links: ArhivsLink[]
  information: ArhivsInformationI
}