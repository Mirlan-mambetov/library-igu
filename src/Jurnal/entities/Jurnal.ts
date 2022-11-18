import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { JurnalAboutEntity } from "./jurnal.about";

@Entity({ name: 'jurnal' })
export class JurnalEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  jurnaltitle: string

  @Column()
  jurnalsubtitle: string

  @Column()
  jurnaldescription: string

  @Column()
  image: string

  @OneToOne(() => JurnalAboutEntity)
  @JoinColumn()
  jurnalabout: JurnalAboutEntity
}