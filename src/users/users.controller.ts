import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('users')
export class UsersController {
	constructor(private readonly userService: UsersService) {}


	@Get()
	@Auth('jwt')
	getAllUsers() {
		return this.userService.getAllUsers()
	}
}
