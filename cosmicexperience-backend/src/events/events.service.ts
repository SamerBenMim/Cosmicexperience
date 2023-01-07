import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user/entities/user.entity';
import { LessThan, MoreThan, Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private EventRepository: Repository<Event>,
  ) { }

  async joinEvent(user: User, id: number) {
    try {
      const event = await this.EventRepository.findOneOrFail(id);

      if (event.participants) {
        event.participants = [...event.participants, user];
        console.log(event.participants);
      } else {
        console.log('empty');
        event.participants = [user];
      }

      //addedd the user to the event
      console.log(event.participants);

      //save it to the database
      return await this.EventRepository.save(event);
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException("You're not authorized");
    }
  }

  async createEvent(
    createEventDto: CreateEventDto,
    user: User,
  ): Promise<Event> {
    try {
      const event = await this.EventRepository.save({
        ...createEventDto,
        organiser: user,
      });

      delete event.organiser;

      return event;
    } catch (error) {
      throw new BadRequestException('Cannot create event');
    }
  }

  async getPastEvents(): Promise<Event[]> {
    const myDate = new Date();
    const events = await this.EventRepository.find({
      where: { date: LessThan(myDate) },
    });

    return events;
  }

  async getUpcomingEvents(): Promise<Event[]> {
    const myDate = new Date();
    const events = await this.EventRepository.find({
      where: { date: MoreThan(myDate) },
    });
    return events;
  }

  async getEventsForUser(user: User): Promise<Event[]> {
    return await this.EventRepository.find({ organiser: user });
  }

  async getAllEvents(): Promise<Event[]> {
    try {
      return await this.EventRepository.find();
    } catch (error) {
      throw new BadRequestException('error while finding events');
    }
  }

  async findEventById(id: number): Promise<Event> {
    try {
      return await this.EventRepository.findOne(id);
    } catch (error) {
      throw new BadRequestException(`error while finding event with id ${id}`);
    }
  }

  async updateEventById(
    id: number,
    updateEventDto: UpdateEventDto,
    user: User,
  ): Promise<Event> {
    try {
      let result = await this.findEventById(id);
      // check if the user is the owner of the event
      console.log(user.eventsCreated);
      let owner = false;
      user.eventsCreated.forEach((item) => {
        if (item.id == id) {
          owner = true;
        }
      });

      // if he's not the owner throw an exception
      if (owner == false) {
        throw new BadRequestException();
      }

      result = { ...result, ...updateEventDto };
      await this.EventRepository.update(id, result);
      return result;
    } catch (error) {
      throw new BadRequestException(`error while finding event with id ${id}`);
    }
  }

  async deleteEventById(id: number) {
    const result = await this.EventRepository.delete(id);
    if (result.raw.affectedRows == 1) {
      return {
        message: `deleted event with id ${id}`,
      };
    }
    throw new BadRequestException(`error while deleting event with id ${id}`);
  }
}
