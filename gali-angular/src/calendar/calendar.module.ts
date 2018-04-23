import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [
    CalendarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CalendarModule.forRoot()
  ]
})
export class MyModule { }
