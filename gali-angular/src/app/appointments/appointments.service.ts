import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Appointment } from './appointment';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';


import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()

export class AppointmentsService {
  //url to appointments api
  appointmentsUrl = 'api/appointments';
  //apiKey = '750cc940-49c8-11e8-be2e-0242ac120003';
  //error handler
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('AppointmentsService');
  }

  /** GET appointments from the server */
  getAppointments (): Observable<Appointment[]> {
    //let param = new HttpParams().set('auth-token', this.apiKey);
    //return this.http.get<Appointment[]>(this.appointmentsUrl, {params: param}).pipe(
    return this.http.get<Appointment[]>(this.appointmentsUrl).pipe(
      catchError(this.handleError('getAppointments', []))
    );
  }
}
