export class User {
  id: number;
  role: string;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  birthdate: Date;
  gender: boolean;
  address: string;
  phone: string;

  constructor(
    id: number,
    role: string,
    username: string,
    firstname: string,
    lastname: string,
    gender: boolean,
  ) {
    this.id = id;
    this.role = role;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
  }
}
