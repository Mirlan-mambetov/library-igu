import { PageEntity } from "src/pages/entities/Page";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IslinkEntity } from "./Islink";

@Entity({ name: 'tabs' })
export class TabsEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ nullable: true })
  description: string

  @OneToMany(() => IslinkEntity, (tabs) => tabs.tabs)
  @JoinColumn()
  isLink: IslinkEntity[]

  @ManyToOne(() => PageEntity, (page) => page.tabs)
  @JoinColumn()
  page: PageEntity
}