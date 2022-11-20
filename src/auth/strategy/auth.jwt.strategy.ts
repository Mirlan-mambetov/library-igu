import { ConfigService } from '@nestjs/config';
import { Strategy, ExtractJwt } from 'passport-jwt'
import {PassportStrategy} from '@nestjs/passport'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../users/entity/user.entity';

export class AuthJwtStrategy extends PassportStrategy(Strategy){
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: configService.get("JWT_SECRET")
    })
  }
  
  async validate({ id }: Pick<UserEntity, "id">) {
    return this.userRepository.findBy({ id })
  }
}