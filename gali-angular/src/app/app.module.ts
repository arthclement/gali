import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import flex-layout module
// import {FlexLayoutModule} from '@angular/flex-layout';
//import flex-layout module



import { AppComponent } from './app.component';
// agenda + cardex
import { AgendaComponent } from './agenda/agenda.component';
import { CardexComponent } from './cardex/cardex.component';
// routing
import { AppRoutingModule } from './app-routing.module';

//test agenda
import { CalendarModule } from 'angular-calendar';



// module layout flex = 
//import { FlexLayoutModule } from '@angular/flex-layout';

//module sidebar





@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    CardexComponent,
    
     
   
    
    //FlexLayoutModule
  ],
  imports: [
    BrowserModule,
    // FlexLayoutModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
