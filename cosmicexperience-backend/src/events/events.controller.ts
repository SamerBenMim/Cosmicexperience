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

@Controller('cosmic')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @UseGuards(JwtAuthGuard)
  @Post('joinEvent/:id')
  async joinEvent(
    @GetUser() user: User,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.eventService.joinEvent(user, id);
  }

  @Get('all')
  getAllEvents(): Promise<Event[]> {
    return this.eventService.getAllEvents();
  }

  @Get('pastEvents')
  async getPastEvents(): Promise<Event[]> {
    return this.eventService.getPastEvents();
  }

  @Get('upComingEvents')
  async getUpcomingEvents(): Promise<Event[]> {
    return this.eventService.getUpcomingEvents();
  }

  @Get('user')
  @UseGuards(AuthGuard())
  getEventsForUser(@GetUser() user: User): Promise<Event[]> {
    return this.eventService.getEventsForUser(user);
  }

  @UseGuards(JwtAuthGuard) //to force auth to create events
  @Post()
  createEvent(
    @Body() createEventDto: CreateEventDto,
    @GetUser() user: User,
  ): Promise<Event> {
    console.log("samer")
    return this.eventService.createEvent(createEventDto, user);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  updateEventById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEventDto: UpdateEventDto,
    @GetUser() user: User,
  ): Promise<Event> {
    return this.eventService.updateEventById(id, updateEventDto, user);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteEventById(@Param('id', ParseIntPipe) id: number) {
    return this.eventService.deleteEventById(id);
  }

  @Get(':id')
  findEventById(@Param('id', ParseIntPipe) id: number): Promise<Event> {
    return this.eventService.findEventById(id);
  }
}
