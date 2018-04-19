import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//warning messages must install depedencies myself
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CardexFormComponent } from './cardex-form/cardex-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CardexFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
