import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TabsEntity } from "./Tabs";

@Entity({ name: 'is_link' })
export class IslinkEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  link: string

  @ManyToOne(() => TabsEntity, (tabs) => tabs.isLink)
  @JoinColumn()
  tabs: TabsEntity
}