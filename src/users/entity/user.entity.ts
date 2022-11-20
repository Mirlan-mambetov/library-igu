import { BaseEntity } from "src/utils/base.entity.utils"
import { Column, Entity, OneToMany } from "typeorm"
import { UserRoleEntity } from "./user.roles.entity"

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {

  @Column()
  name: string

  @Column({unique: true})
  email: string

  @Column()
  password: string

  @OneToMany(() => UserRoleEntity, role => role.user)
  role: UserRoleEntity[]
}