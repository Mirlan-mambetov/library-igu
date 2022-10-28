import { IsString } from "class-validator";

export class UpdateCategoryDto {
  @IsString({ message: 'Название категории должно содержать только строки. Запрещены любые символы и занки!' })
  name: string
}