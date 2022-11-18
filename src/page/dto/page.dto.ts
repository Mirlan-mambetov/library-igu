import { IsString } from "class-validator";
import { PAGE_NOT_A_STRING } from "../constance/page.message.constance";

export class PageDto {
  @IsString({ message: PAGE_NOT_A_STRING })
  name: string
}