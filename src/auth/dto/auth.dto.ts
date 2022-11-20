import { IsEmail, IsString, Length } from "class-validator"
import { USER_MIN_MAX_LENGTH } from "../constance/auth.message.constance"

export class AuthDto{

  @IsString()
  @Length(3, 40, {message: USER_MIN_MAX_LENGTH})
  name: string

  @IsEmail()
  email: string

  @IsString()
  password: string
}