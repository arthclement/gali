import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AgendaComponent } from './agenda/agenda.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    AgendaComponent,
    SidebarComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
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
      {
        path: 'body',
        component: BodyComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
