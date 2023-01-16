import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async updateUser(user: User, updateUserDto: UpdateUserDto): Promise<UserDto> {
    try {
      //encrypt the password if it exists
      if (updateUserDto.password) {
        updateUserDto.password = await this.hashPassword(
          updateUserDto.password,
          user.salt,
        );
      }
      const user1 = await this.userRepository.findOneOrFail(user.id);
      const newUser = { ...user1, ...updateUserDto };
      return await this.userRepository.save(newUser);
    } catch (error) {
      throw new UnauthorizedException("You're not authorized");
    }
  }

  async getEventsOfUser(user: User): Promise<User> {
    try {
      return await this.userRepository.findOne(user.id);
    } catch (error) {
      throw new UnauthorizedException('unauthorized user');
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }
}
