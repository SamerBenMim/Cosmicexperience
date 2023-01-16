import { Event } from 'src/events/entities/event.entity';

import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  salt: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dateOfBirthday: Date;

  //bech tetbadel w tokhrej tableau wahadha
  @Column()
  rate: number;

  @OneToMany(() => Event, (event) => event.organiser, { eager: true })
  eventsCreated: Event[];
}
