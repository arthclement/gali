import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import flex-layout module
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
