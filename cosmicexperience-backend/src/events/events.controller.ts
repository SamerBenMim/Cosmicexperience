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
  @Delete(':id')
  // @UseGuards(JwtAuthGuard)
  deleteEventById(@Param('id', ParseIntPipe) id: number) {
    return this.eventService.deleteEventById(id);
  }
}
