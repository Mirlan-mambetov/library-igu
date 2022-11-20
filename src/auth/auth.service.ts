import { Injectable, NotFoundException, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { USER_ALREADY_EXIST, USER_NOT_FOUND, USER_WRONG_PASSWORD } from './constance/auth.message.constance';
import { AuthDto } from './dto/auth.dto';
import {compare, genSalt, hash} from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepositroy: Repository<UserEntity>,
    private readonly jwtService: JwtService
  ) {}

  async login(dto: Pick<AuthDto, "email" | "password">) {
    const user = await this.validateUser(dto)
    return {
      user: this.returnUserField(user),
      accessToken: await this.generateAccessToken(user.id)
    }
  }

  async register(dto: AuthDto) {
    const oldUser = await this.userRepositroy.findOneBy({email: dto.email})
    if (oldUser) throw new BadRequestException(USER_ALREADY_EXIST)

    const salt = await genSalt(10)
    const hashPassword = await hash(dto.password, salt)

    const newUser = this.userRepositroy.create({
      name: dto.name,
      email: dto.email,
      password: hashPassword
    })
    const user = await this.userRepositroy.save(newUser)
    return {
      user: this.returnUserField(user),
      accessToken: await this.generateAccessToken(user.id)
    }
  }

  async generateAccessToken(id: number) {
    const data = {id}
    return await this.jwtService.signAsync(data, {
      expiresIn: "31d"
    })
  }

  async validateUser(dto: Pick<AuthDto, "email" | "password">) {
    const user = await this.userRepositroy.findOne({
      where: {email: dto.email},
      select: ['name', 'email', 'role', 'password']
    })
    if (!user) throw new NotFoundException(USER_NOT_FOUND)
    const comparePassword = await compare(dto.password, user.password)
    if (!comparePassword) throw new UnauthorizedException(USER_WRONG_PASSWORD)
    return user
  }


  returnUserField(user: UserEntity) {
    return {
      id: user.id,
      name: user.name,
      role: user.role,
      email: user.email
    }
  }
}
