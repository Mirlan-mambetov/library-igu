import {
	Controller,
	HttpCode,
	Post,
	Body,
	ValidationPipe,
	Get
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthDto } from './dto/auth.dto'
import { ParseIntPipe } from '@nestjs/common/pipes'
import { HttpStatus } from '@nestjs/common/enums'
import { Auth } from './decorators/auth.decorator'
import { Request } from 'express'
import { CurrentUser } from 'src/users/decorator/user.decorator'
import { UserEntity } from 'src/users/entity/user.entity'

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	@HttpCode(HttpStatus.OK)
	login(@Body(new ValidationPipe()) dto: Pick<AuthDto, 'email' | 'password'>) {
		return this.authService.login(dto)
	}

	@Post('register')
	@HttpCode(HttpStatus.CREATED)
	register(@Body(new ValidationPipe()) dto: AuthDto) {
		return this.authService.register(dto)
	}

	@Auth('jwt')
	@Post('logout')
	@HttpCode(HttpStatus.OK)
	logout(@CurrentUser() user: UserEntity) {
		return this.authService.logout(user['sub'])
	}

	@Auth('jwt-refresh')
	@Post('refresh')
	@HttpCode(HttpStatus.OK)
	refreshToken(@CurrentUser() user: UserEntity) {
		return this.authService.refreshToken(user['sub'], user['refreshToken'])
	}

	@Auth('jwt')
	@Get()
	@HttpCode(HttpStatus.OK)
	getAllUsers() {
		return this.authService.getAllUsers()
	}
}
