import { IsNotEmpty, IsString } from "class-validator"

export class HeroI {

  @IsString({ message: 'Заголовок может быть только в строковом формате, без содержания чисел,и знаков!' })
  @IsNotEmpty({ message: 'Заголовок не должен быть Пустым' })
  title: string

  @IsString({ message: 'Заголовок может быть только в строковом формате, без содержания чисел,и знаков!' })
  background?: string

  @IsString({ message: 'Заголовок может быть только в строковом формате, без содержания чисел,и знаков!' })
  subtitle?: string
}

export class HeroSubContentI {

  @IsString({ message: 'Заголовок может быть только в строковом формате, без содержания чисел,и знаков!' })
  @IsNotEmpty({ message: 'Заголовок не может быть пустым!' })
  title: string

  @IsString({ message: 'Описание может быть только в строковом формате, без содержания чисел,и знаков!' })
  @IsNotEmpty({ message: 'Описание не может быть пустым!' })
  description: string
}