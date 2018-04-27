import { Component, OnInit } from '@angular/core';

import { Appointment } from './appointment';
import {AppointmentsService} from "./appointments.service";
import {Professional} from "./professional";

@Component({
  selector: 'app-rdv',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  providers: [ AppointmentsService ],
})
export class AppointmentsComponent implements OnInit {

  appointments: Appointment[];
  professionals: Professional[];

  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit()
  {
    this.getAppointments();
  }

  getAppointments(): void {
    this.appointmentsService.getAppointments().subscribe(
      appointments => this.appointments = appointments
    );
  }

  getProfessionals(): void {
    this.appointmentsService.getProfessionals().subscribe(
      professionals => this.professionals = professionals
    );
  }
}
