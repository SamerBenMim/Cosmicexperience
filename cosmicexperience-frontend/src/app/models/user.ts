export class User {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  dateOfBirthday: Date;

  constructor(
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    dateOfBirthday: Date
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.email = email;
    this.dateOfBirthday= dateOfBirthday
  }
}
