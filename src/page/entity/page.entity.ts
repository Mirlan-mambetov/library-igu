import { HeroEntity } from "src/hero/entity/Hero.entity"
import { HeroSubcontentEntity } from "src/hero/entity/hero.subcontent.entity"
import { JournalEntity } from "src/journal/entity/journal.entity"
import { TabsEntity } from "src/tabs/entity/tabs.entity"
import { BaseEntity } from "src/utils/base.entity.utils"
import { VestnikEntity } from "src/vestnik/entity/vestnik.entity"
import { Column, Entity, OneToMany } from "typeorm"

@Entity({ name: "page" })
export class PageEntity extends BaseEntity {

  @Column({ name: "page_name", unique: true })
  name: string

  @OneToMany(() => HeroEntity, hero => hero.page)
  hero: HeroEntity[]

  @OneToMany(() => JournalEntity, journal => journal.page)
  journal: JournalEntity[]

  @OneToMany(() => TabsEntity, tabs => tabs.page)
  tabs: TabsEntity[]

  @OneToMany(() => VestnikEntity, vestnik => vestnik.page)
  vestnik: VestnikEntity[]
}