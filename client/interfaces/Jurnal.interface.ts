export interface JurnalI {
  id: string | number
  information?: JurnalInformationI
  jurnalAbout: JurnalAboutI
}
export interface JurnalInformationI {
  id: string | number
  title: string
  address: AddressItemsI[]
}
interface JurnalAboutI {
  title: string
  text: string
  image: string
  subTitle: string
}

interface AddressItemsI {
  id: string | number
  name: string
  description: string
}