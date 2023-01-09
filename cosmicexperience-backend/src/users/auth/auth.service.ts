import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './dto/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  //a method to hash a password with a specific salt
  private async hashPassword(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }

  //check a plain text password is valid
  private async ValidateUserPassword(
    loginUserDto: LoginUserDto,
  ): Promise<string> {
    const { username, password } = loginUserDto;
    const user = await this.userRepository.findOne({ username });

    //hash the raw password
    try {
      const hashedPassword = await this.hashPassword(password, user.salt);
      if (user && hashedPassword === user.password) {
        return username;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }

  // create a new account to a new user
  async signUp(createUserDto: CreateUserDto): Promise<any> {
    //create a salt for every user and hash the password
    const salt = await bcrypt.genSalt();
    const password = await this.hashPassword(createUserDto.password, salt);

    //Check for duplicate users
    try {
      await this.userRepository.save({ ...createUserDto, salt, password });
      return { message: 'user has been created' };
    } catch (error) {
      throw new ConflictException('Username already exists');
    }
  }

  //login users
  async signIn(loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const username = await this.ValidateUserPassword(loginUserDto);
    if (!username) {
      throw new UnauthorizedException('Incorrect username or password');
    }

    //generating the payload
    const user = await this.userRepository.findOne({ username });
    const payload: JwtPayload = { username, email: user.email };
    //generating the token
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };
  }
}
