import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as $ from 'jquery';
// for the gesture
import 'hammerjs';

//warning messages must install depedencies myself
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
//form module for the ngModel
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AgendaComponent } from './agenda/agenda.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
//form data entry
//import { MdInputModule, MdButtonModule } from '@angular/material';

//importing the HTTP request GET + POST == avoid
import { HttpClientModule } from '@angular/common/http';

//routing
//routerModule = responsible for the navigation
//routes = an array, routes of informations of each page
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';






//adding all the imports into the ng Module declarations
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    AgendaComponent,
    SidebarComponent,
    BodyComponent,
    SliderComponent
   
    
    
  ],
  //activation of the imports
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    //error message no exported member
   // MdInputModule,
    //MdButtonModule
    HttpClientModule, 
    RouterModule.forRoot([
      {
        path:'', component: AgendaComponent
      },
      
      {
        path: 'agenda', component: AgendaComponent
      },
      {
        path: 'form', component: FormComponent
      },
      {
        path:'body', component:BodyComponent
      },
    ])
    //RouterModule.forRoot()= static method for routerModule class = defines the root route for application
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
