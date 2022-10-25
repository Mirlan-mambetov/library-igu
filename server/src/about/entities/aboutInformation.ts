import { PageEntity } from "src/pages/entities/Page";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'about_information' })
export class AboutInfoEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  ceils: number

  @Column()
  description: string

  @ManyToOne(() => PageEntity, (page) => page.aboutInformation)
  page: PageEntity
}