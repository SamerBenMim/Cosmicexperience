import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';

@Module({
  imports: [],
  providers: [],
  controllers: [],
  exports: [PassportModule],
})
export class AuthModule {}
