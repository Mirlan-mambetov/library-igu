import { AboutEntity } from "src/about/entities/About";
import { AboutInfoEntity } from "src/about/entities/aboutInformation";
import { ArrivalsE } from "src/arrivals/entities/arrivals";
import { ArrivalsImageE } from "src/arrivals/entities/arrivals.image";
import { ElibraryEntity } from "src/elibrary/entities/Elibrary";
import { HeroE } from "src/Hero/entities/hero";
import { JurnalEntity } from "src/Jurnal/entities/Jurnal";
import { OwnerEntity } from "src/Owner/entities/Owner";
import { TabsEntity } from "src/Tabs/entities/Tabs";
import { VestnikEntity } from "src/vestnik/entities/Vestnik";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'pages' })
export class PageEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  name: string

  @OneToMany(() => HeroE, (hero) => hero.page)
  @JoinColumn()
  hero: HeroE

  @OneToMany(() => TabsEntity, (tabs) => tabs.page)
  @JoinColumn()
  tabs: TabsEntity[]

  @OneToMany(() => AboutEntity, (about) => about.page)
  about: AboutEntity[]

  @OneToOne(() => OwnerEntity)
  @JoinColumn()
  owner: OwnerEntity

  @OneToMany(() => AboutInfoEntity, (info) => info.page)
  @JoinColumn()
  aboutInformation: AboutInfoEntity[]

  @OneToOne(() => JurnalEntity)
  @JoinColumn()
  jurnal: JurnalEntity

  @OneToMany(() => VestnikEntity, (vestnik) => vestnik.page)
  @JoinColumn()
  vestnik: VestnikEntity

  @OneToMany(() => ElibraryEntity, (elib) => elib.page)
  @JoinColumn()
  elibrary: ElibraryEntity

  @OneToMany(() => ArrivalsE, (arrivals) => arrivals.page)
  @JoinColumn()
  arrivals: ArrivalsE[]

  @OneToMany(() => ArrivalsImageE, (arrivalImage) => arrivalImage.page)
  @JoinColumn()
  arrivalImage: ArrivalsImageE[]
} 