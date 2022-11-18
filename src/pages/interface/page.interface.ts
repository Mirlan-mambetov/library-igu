import { IsNotEmpty, IsString } from "class-validator"

export class PageI {
  @IsNotEmpty({ message: 'Введите название страницы!' })
  @IsString({ message: 'Название страницы должно содержать только строки!' })
  name: string
}