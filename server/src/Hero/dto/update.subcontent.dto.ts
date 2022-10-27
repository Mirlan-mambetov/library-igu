import { IsNotEmpty, IsString } from "class-validator"

export class UpdateSubcontentDto {

  @IsString({ message: 'Заголовок может быть только в строковом формате, без содержания чисел,и знаков!' })
  @IsNotEmpty({ message: 'Заголовок не может быть пустым!' })
  title: string

  @IsString({ message: 'Описание может быть только в строковом формате, без содержания чисел,и знаков!' })
  @IsNotEmpty({ message: 'Описание не может быть пустым!' })
  description: string
}