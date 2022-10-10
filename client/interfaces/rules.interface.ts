export interface RulesItemsInterface {
  id: string | number
  title: string
  description?: string
}
export interface RulesInterface {
  id: string | number
  title: string
  items: RulesItemsInterface[]
  author?: string
}