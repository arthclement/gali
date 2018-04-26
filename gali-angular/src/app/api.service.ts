import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { User } from './user';
import { Coiffeur } from './coiffeur';
import { Appointment } from './appointment';

@Injectable()
export class ApiService {
  apiResult;
  usersList;

  getUsers() {
    this.http.get('/api/users')
    .subscribe(data => this.apiResult = data);

    for (const user of this.apiResult) {
      let userToAppend = new User(
        user['id'],
        user['roles'][0],
        user['username'],
        user['firstname'],
        user['lastname'],
        user['gender']
      );
    }

    return this.usersList;
  }

  getProfessionals() {
    this.http.get('/api/professionals').
    subscribe(data => this.apiResult = data);

    for (const professionals of this.apiResult) {
      let professionalToAppend = new Coiffeur(
        professionals['id'],
        professionals['roles'][0],
        professionals['username'],
        professionals['firstname'],
        professionals['lastname'],
        professionals['gender']
      );
    }

    return this.usersList;
  }

  getAppointments(id) {
    let params = new HttpParams().set('id', id);

    this.http.get(
      '/api/appointments',
      {
        params: params
      }
    ).subscribe(
        data => this.apiResult = data
    );

    for (const appointment of this.apiResult) {
      let professional

      let appointmentsToAppend = new Appointment(
        appointment['id'],
        new Date(appointment['startdate']),
        new Date(appointment['enddate']),
      )
    }

  }

  constructor(private http: HttpClient) { }

}
