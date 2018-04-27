import { Component, OnInit, NgModule } from '@angular/core';
<<<<<<< HEAD
// Router for path
=======
>>>>>>> e0964486874bf7988ed7457a0f3276b1aee6af3e
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { AgendaComponent } from '../agenda/agenda.component';

<<<<<<< HEAD
// config for categories navigation

=======
>>>>>>> e0964486874bf7988ed7457a0f3276b1aee6af3e
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
