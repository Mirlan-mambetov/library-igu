import { BaseEntity } from "src/utils/base.entity.utils";
import { Column, Entity, ManyToOne } from "typeorm";
import { TeachersEntity } from "./teachers.entity";

@Entity({name: "teachers_works"})
export class TeachersWorksEntity extends BaseEntity{
  
  @Column()
  authors: string
  
  @Column({type: "text"})
  description: string

  @Column()
  file: string

  @ManyToOne(() => TeachersEntity, teachers => teachers.works)
  category: TeachersEntity
}