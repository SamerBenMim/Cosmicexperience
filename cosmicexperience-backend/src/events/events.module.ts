import { Module } from '@nestjs/common';
import { EventService } from './events.service';
import { EventController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { User } from 'src/users/user/entities/user.entity';
import { AuthModule } from 'src/users/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Event, User]), AuthModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule { }
