export class CreateEventDto {
  name: string;
  description: string;
  place: string;
  date: Date;
  numnberOfDays: number; 
  numberMaxOfParticipants: number;
  price: number;
  image: string;
  organiser_id: number;
}
