interface addressItems {
  id: string | number
  name: string
  description: string
}

interface arhivs {
  id: string | number
  name: string
  alias: string
}

export interface JurnalAboutI {
  title: string
  text: string
  image?: string
}

export interface VestnikInformationI {
  id: string | number
  title: string
  address: addressItems[]
}

export interface VestnikArhivsI {
  totalArhivs: number
  totalMaterials: number
  arhivs: arhivs[]
}