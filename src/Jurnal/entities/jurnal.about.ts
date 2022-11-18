import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { JurnalAddressEntity } from "./jurnal.address";

@Entity({ name: 'jurnal_about' })
export class JurnalAboutEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @OneToMany(() => JurnalAddressEntity, (address) => address.jurnalabout)
  address: JurnalAddressEntity[]
}