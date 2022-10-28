import { IsNotEmpty } from "class-validator";

export class CreateMainDto {
  @IsNotEmpty({ message: 'Категория не может быть пустым.' })
  name: string

  @IsNotEmpty({ message: 'Выберите изображение категории' })
  image: string
}