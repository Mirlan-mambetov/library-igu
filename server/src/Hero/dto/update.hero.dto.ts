import { IsString, MinLength } from "class-validator"
import { TITLE_MIN_LENGTH, TITLE_TYPE_STRING } from "../constans/message.constans"

export class UpdateHeroDto {
  @MinLength(4, { message: TITLE_MIN_LENGTH })
  @IsString({ message: TITLE_TYPE_STRING })
  title: string

  background?: string
}