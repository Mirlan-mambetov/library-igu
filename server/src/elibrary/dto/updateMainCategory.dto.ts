import { IsNotEmpty } from "class-validator";

export class UpdateMainDto {
  @IsNotEmpty({ message: 'Категория не может быть пустым.' })
  name: string

  @IsNotEmpty({ message: 'Выберите изображение категории' })
  image: string
}