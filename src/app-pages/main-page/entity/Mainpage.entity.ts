import { BaseEntity } from "src/app-pages/utils/base.entity.utils";
import { Entity } from "typeorm";

@Entity({ name: "main_page" })
export class MainPageEntity extends BaseEntity {
  hero: string
}