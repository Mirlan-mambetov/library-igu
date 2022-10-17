export interface SubcontentI {
  id: string | number
  title?: string
  description?: string[]
}
export interface HeroI {
  title: string
  backGround?: string
  subContent?: SubcontentI[]
  subTitle?: string
  information?: number
}