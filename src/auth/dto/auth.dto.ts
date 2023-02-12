import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'
import {
	USER_MIN_MAX_LENGTH,
	USER_MIN_MAX_LENGTH_PASSWORD
} from '../constance/auth.message.constance'

export class AuthDto {
	@IsString()
	@Length(3, 40, { message: USER_MIN_MAX_LENGTH })
	name: string

	@IsEmail()
	@IsNotEmpty()
	email: string

	@IsString()
	@Length(5, 40, { message: USER_MIN_MAX_LENGTH_PASSWORD })
	password: string
}
