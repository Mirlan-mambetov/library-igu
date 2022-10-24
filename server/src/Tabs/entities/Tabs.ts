import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IslinkEntity } from "./Islink";

@Entity({ name: 'tabs' })
export class TabsEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @OneToMany(() => IslinkEntity, (tabs) => tabs.tabs)
  isLink: IslinkEntity[]
}