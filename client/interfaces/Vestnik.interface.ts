interface addressItems {
  id: string | number
  name: string
  description: string
}

export interface VestnikInformationI {
  id: string | number
  title: string
  address: addressItems[]
}
export interface VestnikCategoryInterface {
  id: string | number
  name: string
  alias: string
}