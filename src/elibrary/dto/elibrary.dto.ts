import { IsNumber, IsString, Length } from "class-validator";

export class ElibraryDto {
  
  @IsString({message: "Название категории должно быть в строковом формате"})
  @Length(4, 255, {message: "Минимальная длина названии 4 символа. Макс. 255 "})
  name: string
}

export class ElibraryCategoryDto {
  
  @IsString({message: "Название подкатегории должно быть в строковом формате"})
  @Length(4, 255, {message: "Минимальная длина подкатегории 4 символа. Макс. 255 "})
  name: string
}

export class ElibraryBookDto {

  @IsString({message: "Авторы должны быть в строковом формате"})
  @Length(4, 255, {message: "Минимальная длина авторов 4 символа. Макс. 255 "})
  authors: string

  @Length(10, 64500, {message: "Минимальная длина авторов 4 символа"})
  description: string

  published: number
}