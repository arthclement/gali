import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { CardexComponent } from './cardex/cardex.component';


@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    CardexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
