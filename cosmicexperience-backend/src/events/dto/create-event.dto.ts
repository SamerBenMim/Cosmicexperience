export class CreateEventDto {
  name: string;
  description: string;
  place: string;
  date: Date;
  numberOfDays: number; 
  numberMaxOfParticipants: number;
  price: number;
  image: string;
  organiser_id: number;
  comments: string;
}
