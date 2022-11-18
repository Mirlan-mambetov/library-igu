import { HeroEntity } from "src/hero/entity/Hero.entity"
import { HeroSubcontentEntity } from "src/hero/entity/hero.subcontent.entity"
import { BaseEntity } from "src/utils/base.entity.utils"
import { Column, Entity, OneToMany } from "typeorm"

@Entity({ name: "page" })
export class PageEntity extends BaseEntity {

  @Column({ name: "page_name", unique: true })
  name: string

  @OneToMany(() => HeroEntity, hero => hero.page)
  hero: HeroEntity[]
}