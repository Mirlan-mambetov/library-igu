import { IsString, Length } from "class-validator";

export class IVestnikMaterialDto {

  @IsString()
  @Length(5, 255)
  authors: string

  @IsString()
  @Length(10, 64500)
  description: string

}