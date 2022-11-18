import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {
  @IsString({ message: 'Авторы должно содержать только строки. Запрещены любые символы и занки!' })
  @IsNotEmpty({ message: 'Введите авторов. Можно через запятые перечислить или один автор.' })
  authors: string

  @IsString({ message: 'Описание должно содержать только строки. Запрещены любые символы и занки!' })
  @IsNotEmpty({ message: 'Описание книги не может быть пустым. Введите Описание' })
  description: string

  @IsString({ message: 'Год издания должно быть только в цифромов формате' })
  @IsNotEmpty({ message: 'Год издания не может быть пустым. Введите \'Год издания\' ' })
  published: number

  @IsString({ message: 'Выберите файл' })
  @IsNotEmpty({ message: 'Файл не выбран.' })
  file: string

}