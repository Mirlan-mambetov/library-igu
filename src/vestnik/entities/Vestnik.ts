import { PageEntity } from "src/pages/entities/Page";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { VestnikArhivsEntity } from "./Vestnik.arhivs";

@Entity({ name: 'vestnik' })
export class VestnikEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(() => PageEntity, (page) => page.vestnik)
  page: PageEntity

  @OneToMany(() => VestnikArhivsEntity, (arhiv) => arhiv.category)
  arhivs: VestnikArhivsEntity[]
}