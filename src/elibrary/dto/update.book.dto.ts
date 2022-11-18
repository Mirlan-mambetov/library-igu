import { IsString } from "class-validator";

export class UpdateBookDto {
  @IsString({ message: 'Авторы должно содержать только строки. Запрещены любые символы и занки!' })
  authors: string

  @IsString({ message: 'Описание должно содержать только строки. Запрещены любые символы и занки!' })
  description: string

  @IsString({ message: 'Год издания должно быть только в цифромов формате' })
  published: number

  @IsString({ message: 'Выберите файл' })
  file: string

}