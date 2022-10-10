export interface VestnikInformationI {
  id: string | number
  title: string
  address: addressItems[]
}
interface addressItems {
  id: string | number
  name: string
  description: string
}