import { User } from './user';

export class Appointment {
  id: number;
  startDate: Date;
  endDate: Date;
  professional: User;
  customer: User;
  description: string;

  constructor(
    id: number,
    startDate: Date,
    endDate: Date,
    professional: User,
    customer: User,
    description: string
  ) {
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.professional = professional;
    this.customer = customer;
    this.description = description;
  }
}
