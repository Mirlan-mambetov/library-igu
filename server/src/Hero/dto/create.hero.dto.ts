import { IsString, IsNotEmpty } from "class-validator"

export class CreateHeroDto {
  @IsString({ message: 'Заголовок может быть только в строковом формате, без содержания чисел,и знаков!' })
  @IsNotEmpty({ message: 'Заголовок не должен быть Пустым' })
  title: string

  @IsString({ message: 'Заголовок может быть только в строковом формате, без содержания чисел,и знаков!' })
  background?: string

  @IsString({ message: 'Подазаголовок может быть только в строковом формате, без содержания чисел,и знаков!' })
  subtitle?: string
}
