import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { JurnalAboutEntity } from "./jurnal.about";

@Entity({ name: 'jurnal_adress' })
export class JurnalAddressEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @ManyToOne(() => JurnalAboutEntity, (jurnalAbout) => jurnalAbout.address)
  jurnalabout: JurnalAboutEntity
}