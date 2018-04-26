import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientXsrfModule } from '@angular/common/http';

import { RequestCache, RequestCacheWithMap } from './request-cache.service';

import { AppComponent } from './app.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { AppointmentsComponent } from './appointments/appointments.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

// import { httpInterceptorProviders } from './http-interceptors/index';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    MessagesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
  ],
  providers: [
    HttpErrorHandler,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    MessageService
    // httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
