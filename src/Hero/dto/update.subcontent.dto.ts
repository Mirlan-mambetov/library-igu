import { IsString } from "class-validator"

export class UpdateSubcontentDto {

  @IsString({ message: 'Заголовок может быть только в строковом формате, без содержания чисел,и знаков!' })
  title?: string

  @IsString({ message: 'Описание может быть только в строковом формате, без содержания чисел,и знаков!' })
  description?: string
}