export class EventCosmic {
  name: string;
  description: string;
  place: string;
  date: Date;
  numberOfDays: number;
  numberMaxOfParticipants: number;
  price: number;
  image: string;

  constructor(
    name: string,
    description: string,
    place: string,
    date: Date,
    numberOfDays: number,
    numberMaxOfParticipants: number,
    price: number,
    image: string
  ) {
    this.name = name;
    this.description = description;
    this.place = place;
    this.date = date;
    this.numberOfDays = numberOfDays;
    this.numberMaxOfParticipants = numberMaxOfParticipants;
    this.price = price;
    this.image = image;
  }
}
