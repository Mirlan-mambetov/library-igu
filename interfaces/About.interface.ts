export interface AboutI {
  title?: string
  image?: string
  description: string
}
export interface AboutTextContentI {
  id: string | number
  title?: string
  image?: string
  description: string
}
export interface OwnerI {
  id: string | number
  name: string
  image: string
  phone: string
  email: string
}
export interface AboutInformationI {
  id: string | number
  ceils: number
  description: string
}