import { Controller,HttpCode, Post, Put, Body, Param, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  login(@Body(new ValidationPipe()) dto: Pick<AuthDto, "email" | "password">) {
    return this.authService.login(dto)
  }

  @Post('register')
  @HttpCode(201)
  register(@Body(new ValidationPipe()) dto: AuthDto) {
    return this.authService.register(dto)
  } 
}
