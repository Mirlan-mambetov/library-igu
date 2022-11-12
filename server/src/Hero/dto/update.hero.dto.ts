import { IsString, IsNotEmpty } from "class-validator"

export class UpdateHeroDto {
  @IsString({ message: 'Заголовок может быть только в строковом формате, без содержания чисел,и знаков!' })
  title: string

  @IsString({ message: 'Заголовок может быть только в строковом формате, без содержания чисел,и знаков!' })
  background?: string

  @IsString({ message: 'Подазаголовок может быть только в строковом формате, без содержания чисел,и знаков!' })
  subtitle?: string
}