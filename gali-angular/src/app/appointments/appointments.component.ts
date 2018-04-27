import { Component, OnInit } from '@angular/core';

import { Appointment } from './appointment';
import {AppointmentsService} from "./appointments.service";

@Component({
  selector: 'app-rdv',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  providers: [ AppointmentsService ],
})
export class AppointmentsComponent implements OnInit {

  appointments: Appointment[];

  getAppointments(): void {
    this.appointmentsService.getAppointments().subscribe(
      appointments => this.appointments = appointments
    );
  }
  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit() {
    this.getAppointments();
  }

}
