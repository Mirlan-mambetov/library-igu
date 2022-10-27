import { IsNotEmpty } from "class-validator";

export class CreateNewsDto {
  @IsNotEmpty({ message: 'Введите название новости! Сейчас буду ругаться.' })
  title: string
  @IsNotEmpty({ message: 'Обычно у новостей есть свое описание. Тут тоже маленько дабавить надо..' })
  description: string

  @IsNotEmpty({ message: 'Новость без картинки..ну это уже слишком.' })
  image: string
}