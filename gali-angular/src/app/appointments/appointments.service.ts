import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


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
  //error handler
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('AppointmentsService');
  }

  /** GET appointments from the server */
  getAppointments (): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.appointmentsUrl).pipe(
      catchError(this.handleError('getAppointments', []))
    );
  }
}
