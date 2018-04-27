import { User } from './user';
import { Time } from '@angular/common';

export class Appointment {
  id: number;
  startDate: Date;
  duration: Time;
  professional: User;
  customer: User;
  description: string;

  constructor(
    id: number,
    startDate: Date,
    duration: Time,
    // professional: User,
    // customer: User,
    description: string
  ) {
    this.id = id;
    this.startDate = startDate;
    this.duration = duration;
    // this.professional = professional;
    // this.customer = customer;
    this.description = description;
  }
}
