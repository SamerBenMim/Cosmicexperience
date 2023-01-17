import { User } from 'src/users/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column( )
  place: string;

  @Column( )
  date: Date;

  @Column( { default: 1 })
  numberOfDays: number; 

  @Column( { default: 0 })
  numberMaxOfParticipants: number;

  @Column( { default: 0 })
  numberOfParticipants: number;

  @Column()
  image: string;

  @Column()
  price: number;

  @ManyToOne(() => User, (user) => user.eventsCreated, { eager: false })
  organiser: User;

  @ManyToMany(() => User, {
    cascade: true,
  })
  @JoinTable()
  participants: User[];
}
