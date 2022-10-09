interface IsLinkI {
  id: string | number
  name: string
  link: string
}

export interface TabsInterface {
  id: string | number
  title: string
  description?: string
  isLink?: IsLinkI[]
}

