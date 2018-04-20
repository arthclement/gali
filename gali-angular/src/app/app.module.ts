import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// for the gesture
import 'hammerjs';

//warning messages must install depedencies myself
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
//form module
import { FormsModule } from '@angular/forms';
//form data entry
//import { MdInputModule, MdButtonModule } from '@angular/material';







@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    
  ],
  //activation of the imports
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    //error message no exported member
   // MdInputModule,
    //MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
