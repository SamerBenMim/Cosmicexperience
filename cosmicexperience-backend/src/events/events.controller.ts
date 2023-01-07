import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/users/auth/get-user.decorator';
import { JwtAuthGuard } from 'src/users/auth/jwt-auth.guard';
import { User } from 'src/users/user/entities/user.entity';
import { EventService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Controller('cycling')
export class EventController {
  constructor(private readonly eventService: EventService) {}



  @Get(':id')
  findEventById(@Param('id', ParseIntPipe) id: number): Promise<Event> {
    return this.eventService.findEventById(id);
  }
}
