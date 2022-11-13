import { IsString, MinLength } from "class-validator"
import { TITLE_MIN_LENGTH, TITLE_TYPE_STRING } from "../constans/message.constans"

export class UpdateHeroDto {
  @IsString({ message: TITLE_TYPE_STRING })
  @MinLength(4, { message: TITLE_MIN_LENGTH })
  title: string
}