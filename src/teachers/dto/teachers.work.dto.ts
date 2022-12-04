import { IsString, Length } from "class-validator"

export class TeachersWorkDto {

  @IsString({message: "Авторы должны быть в строковм формате"})
  @Length(3, 255, {message: "Минимальная длина авторов 3 символа. И не должен быть больше 255"})
  authors: string

  @IsString({message: "Описание должно быть в строковм формате"})
  @Length(3, 64500, {message: "Длина описания должна быть больше 3 символов. И не должен быть больше 255"})
  description: string
}