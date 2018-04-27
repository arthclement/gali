import { Component, OnInit, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { AgendaComponent } from '../agenda/agenda.component';

@NgModule({
  declarations: [
    AgendaComponent,
    FormComponent,
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot([
      {
        path: 'rdv',
        component: AgendaComponent
      },
      {
        path: 'form',
        component: FormComponent
      },
    ])
  ]
})

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent {


  constructor() { }


}
