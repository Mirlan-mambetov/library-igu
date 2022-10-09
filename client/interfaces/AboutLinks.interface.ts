interface AboutLinksInterface {
  id: string | number
  title: string
  link: string
}
export interface AboutLinksProps {
  rules: Pick<AboutLinksInterface, 'title'>
  phond: AboutLinksInterface[]
}