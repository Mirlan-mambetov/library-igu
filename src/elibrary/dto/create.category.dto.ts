import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
  @IsString({ message: 'Название категории должно содержать только строки. Запрещены любые символы и занки!' })
  @IsNotEmpty({ message: 'Категория не может быть пустым. Введите название' })
  name: string
}