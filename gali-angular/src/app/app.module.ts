import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AgendaComponent } from './agenda/agenda.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { ApiService } from './api.service';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    AgendaComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AgendaComponent
      },

      {
        path: 'rdv',
        component: AgendaComponent
      },
      {
        path: 'form',
        component: FormComponent
      },
    ])
  ],
  providers: [ ApiService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
