import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TabsEntity } from "./Tabs";

@Entity({ name: 'is_link' })
export class IslinkEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  link: string

  @OneToMany(() => TabsEntity, (tabs) => tabs.isLink)
  tabs: TabsEntity
}